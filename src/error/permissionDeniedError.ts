class PermissionDeniedError extends Error {
  constructor() {
    super("Request check permission failed");
    this.name = "PermissionDeniedError";
  }
}

export default PermissionDeniedError;
