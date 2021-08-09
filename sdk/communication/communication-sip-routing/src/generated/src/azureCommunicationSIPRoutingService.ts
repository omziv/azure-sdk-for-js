/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as Parameters from "./models/parameters";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import { AzureCommunicationSIPRoutingServiceContext } from "./azureCommunicationSIPRoutingServiceContext";
import {
  AzureCommunicationSIPRoutingServiceOptionalParams,
  AzureCommunicationSIPRoutingServiceGetSipConfigurationResponse,
  AzureCommunicationSIPRoutingServicePatchSipConfigurationOptionalParams,
  AzureCommunicationSIPRoutingServicePatchSipConfigurationResponse
} from "./models";

class AzureCommunicationSIPRoutingService extends AzureCommunicationSIPRoutingServiceContext {
  /**
   * Initializes a new instance of the AzureCommunicationSIPRoutingService class.
   * @param endpoint The communication resource, for example https://resourcename.communication.azure.com
   * @param options The parameter options
   */
  constructor(
    endpoint: string,
    options?: AzureCommunicationSIPRoutingServiceOptionalParams
  ) {
    super(endpoint, options);
  }

  /**
   * Gets SIP configuration for resource.
   * @param options The options parameters.
   */
  getSipConfiguration(
    options?: coreHttp.OperationOptions
  ): Promise<AzureCommunicationSIPRoutingServiceGetSipConfigurationResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.sendOperationRequest(
      { options: operationOptions },
      getSipConfigurationOperationSpec
    ) as Promise<
      AzureCommunicationSIPRoutingServiceGetSipConfigurationResponse
    >;
  }

  /**
   * Patches SIP configuration for resource.
   * @param options The options parameters.
   */
  patchSipConfiguration(
    options?: AzureCommunicationSIPRoutingServicePatchSipConfigurationOptionalParams
  ): Promise<AzureCommunicationSIPRoutingServicePatchSipConfigurationResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.sendOperationRequest(
      { options: operationOptions },
      patchSipConfigurationOperationSpec
    ) as Promise<
      AzureCommunicationSIPRoutingServicePatchSipConfigurationResponse
    >;
  }
}
// Operation Specifications

const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const getSipConfigurationOperationSpec: coreHttp.OperationSpec = {
  path: "/sip",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SipConfiguration
    },
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint],
  serializer
};
const patchSipConfigurationOperationSpec: coreHttp.OperationSpec = {
  path: "/sip",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.SipConfiguration
    },
    415: {},
    422: {},
    500: {},
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse
    }
  },
  requestBody: Parameters.body,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};

// Operation Specifications

export {
  AzureCommunicationSIPRoutingService,
  AzureCommunicationSIPRoutingServiceContext,
  Models as AzureCommunicationSIPRoutingServiceModels,
  Mappers as AzureCommunicationSIPRoutingServiceMappers
};
