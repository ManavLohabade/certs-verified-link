
import * as React from "react";
import { cn } from "../../lib/utils";
import { ChevronDown } from "lucide-react";

const Select = React.forwardRef(
  ({ children, value, onValueChange, ...props }, ref) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState(value || "");
    const selectRef = React.useRef(null);

    React.useEffect(() => {
      setSelectedValue(value || "");
    }, [value]);

    React.useEffect(() => {
      const handleOutsideClick = (event) => {
        if (selectRef.current && !selectRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      };

      document.addEventListener("mousedown", handleOutsideClick);
      return () => {
        document.removeEventListener("mousedown", handleOutsideClick);
      };
    }, []);

    const handleSelect = (value) => {
      setSelectedValue(value);
      onValueChange && onValueChange(value);
      setIsOpen(false);
    };

    return (
      <div ref={selectRef} className="relative w-full" {...props}>
        <SelectTrigger
          onClick={() => setIsOpen(!isOpen)}
          value={selectedValue}
        />
        {isOpen && (
          <SelectContent>
            {React.Children.map(children, (child) => {
              return React.cloneElement(child, {
                onSelect: handleSelect,
              });
            })}
          </SelectContent>
        )}
      </div>
    );
  }
);

Select.displayName = "Select";

const SelectTrigger = React.forwardRef(
  ({ className, children, onClick, value, ...props }, ref) => {
    return (
      <button
        ref={ref}
        onClick={onClick}
        className={cn(
          "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
      >
        <span>{children || value || "Select an option"}</span>
        <ChevronDown className="h-4 w-4 opacity-50" />
      </button>
    );
  }
);

SelectTrigger.displayName = "SelectTrigger";

const SelectContent = React.forwardRef(
  ({ className, position = "popper", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md",
          className
        )}
        {...props}
      />
    );
  }
);

SelectContent.displayName = "SelectContent";

const SelectItem = React.forwardRef(
  ({ className, children, value, onSelect, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 hover:bg-accent hover:text-accent-foreground",
          className
        )}
        onClick={() => onSelect && onSelect(value)}
        {...props}
      >
        <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
          {/* Checkbox or icon can go here */}
        </span>
        <span className="text-sm">{children}</span>
      </div>
    );
  }
);

SelectItem.displayName = "SelectItem";

const SelectValue = React.forwardRef(({ className, placeholder, ...props }, ref) => {
  return (
    <span className={className} ref={ref} {...props}>
      {placeholder}
    </span>
  );
});

SelectValue.displayName = "SelectValue";

export { Select, SelectTrigger, SelectContent, SelectItem, SelectValue };
