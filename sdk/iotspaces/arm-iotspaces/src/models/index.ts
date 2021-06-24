import * as coreClient from "@azure/core-client";

/** Optional parameters. */
export interface IoTSpacesClientOptionalParams
  extends coreClient.ServiceClientOptions {
  /** Overrides client endpoint. */
  endpoint?: string;
}
