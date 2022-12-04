import {useInjectReducer as useReducer, useInjectSaga as useSaga} from "@nixjs23n6/redux-injectors";

import {InjectReducerParams, InjectSagaParams, RootStateKeyType} from "./types";

/* Wrap redux-injectors with stricter types */

export function useInjectReducer<Key extends RootStateKeyType>(params: InjectReducerParams<Key>) {
  return useReducer(params);
}

export function useInjectSaga(params: InjectSagaParams) {
  return useSaga(params);
}
