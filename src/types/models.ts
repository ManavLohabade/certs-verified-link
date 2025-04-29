
export interface Event {
  id: string;
  title: string;
  feedbackRequired: boolean;
  certificateTemplatePath: string;
}

export interface Certificate {
  id: string;
  certId: string;
  email: string;
  eventId: string;
  filePath: string;
  userName: string;
  mailed: boolean;
  issuedAt: Date;
}

export interface UserFeedback {
  id: string;
  email: string;
  eventId: string;
  feedbackText: string;
  submittedAt: Date;
}

export interface ValidationResponse {
  hasSubmitted: boolean;
  certificateUrl?: string;
}

export interface VerificationResponse {
  valid: boolean;
  name?: string;
  event?: string;
  issuedAt?: string;
}
