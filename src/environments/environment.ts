import { openai_key } from "key";

// const baseUrl = 'https://localhost:5033';
const baseUrl = 'https://api.drnutrisha.app';
// const baseUrl = 'https://api.nutrisha.app';
const openaiApi = openai_key


export const environment = {
  production: true,
  openaiApi,
  baseUrl,
  baseAdminV1Url: `${baseUrl}/admin/api/v1/`,
};
