type HTTPMethod = 'GET' | 'POST' | 'HEAD' | 'PUT' | 'DELETE' | 'PATCH' | 'OPTIONS' | 'TRACE' | 'CONNECT';

export interface UpstreamOptions {
  domain: string;
  protocol?: 'http' | 'https';
  port?: number;
  path?: string;
  timeout?: number;
  headers?: {
    [key: string]: string;
  };
  retry?: number;
  weight?: number;
}

export type FirewallFields = 'country' | 'continent' | 'asn' | 'ip' | 'hostname' | 'user-agent';
export type FirewallOperators = 'equal' | 'not equal' | 'greater' | 'less' | 'in' | 'not in' | 'contain' | 'not contain';
export interface FirewallOptions {
  field: FirewallFields;
  operator: FirewallOperators;
  value: string | string[] | number | number[];
}

export interface CORSOptions {
  /**
   * Configures the **Access-Control-Allow-Origin** CORS header. Possible values:
   * - boolean - set to `true` to reflect the request origin,
   * or set to `false` to disable CORS.
   * - string[] - an array of acceptable origins.
   */
  origin?: boolean | string[] | '*';

  /**
   * Configures the `Access-Control-Allow-Methods` CORS header.
   * Expects an array of valid HTTP methods or `*`.
   * If not specified, defaults to reflecting the method specified
   * in the request’s **Access-Control-Request-Method** header.
   */
  methods?: HTTPMethod[] | '*';

  /**
   * Configures the **Access-Control-Expose-Headers** CORS header.
   * Expects an array of HTTP headers or `*`.
   * If not specified, no custom headers are exposed.
   */
  exposedHeaders?: string[] | '*';

  /**
   * Configures the **Access-Control-Allow-Headers** CORS header.
   * Expects an array of HTTP headers or `*`.
   * If not specified, defaults to reflecting the headers specified
   * in the request’s **Access-Control-Request-Headers** header.
   */
  allowedHeaders?: string[] | '*';

  /**
   * Configures the **Access-Control-Allow-Credentials** CORS header.
   * Set to `true` to pass the header, otherwise it is omitted.
   */
  credentials?: boolean;

  /**
   * Configures the **Access-Control-Max-Age** CORS header.
   * Set to an integer to pass the header, otherwise it is omitted.
   */
  maxAge?: number;
}

export type LoadBalancingMethod = 'round-robin' | 'ip-hash' | 'random';
export interface NetworkOptions {
  loadBalancingMethod?: LoadBalancingMethod;
  websocket?: boolean;
}

export interface CacheOptions {
  cacheEverything?: boolean;
}

export interface OptimizationOptions {
  mirage?: boolean;
  minify?: {
    javascript?: boolean;
    css?: boolean;
    html?: boolean;
  };
}

export interface Configuration {
  upstream: UpstreamOptions | UpstreamOptions[];
  firewall?: FirewallOptions | FirewallOptions[];
  cors?: CORSOptions;
  network?: NetworkOptions;
  cache?: CacheOptions;
  optimization?: OptimizationOptions;
}
