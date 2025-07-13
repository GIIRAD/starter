import fetchGet from '@/util/http/get';

import {CategorizationResponse} from './customer-service-workflow.schemas';


const baseUrl = 'https://ks-workflow-f4afg9ayfaghfxct.westeurope-01.azurewebsites.net/api/gpt_goes_ks/workflow'

export const getCategorizationResponse = async (question: string): Promise<CategorizationResponse> => {
  const url = new URL(baseUrl);
  url.searchParams.append('question', question);
  return fetchGet<CategorizationResponse>(url.toString());
}