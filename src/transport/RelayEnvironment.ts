import { Environment, FetchFunction, Network } from "relay-runtime";

const ENDPOINT = '192.168.1.189:3000/graphql';
const HTTP_ENDPOINT = 'http://' + ENDPOINT;

const fetchFn: FetchFunction = async (request, variables) => {
  const headers: RequestInit['headers'] = {
    Accept:
      'application/graphql-response+json; charset=utf-8, application/json; charset=utf-8',
    'Content-Type': 'application/json',
  };

  const resp = await fetch(HTTP_ENDPOINT, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      query: request.text,
      variables,
    }),
  });

  return await resp.json();
};

function createRelayEnvironment() {
  return new Environment({
    network: Network.create(fetchFn)
  });
}

export const RelayEnvironment = createRelayEnvironment();
