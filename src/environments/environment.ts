// const baseUrl = 'https://localhost:5033';
const baseUrl = 'https://dev.api.nutrisha.app';
// const baseUrl = 'https://api.nutrisha.app';
const openaiApi = 'Bearer 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'


export const environment = {
  production: true,
  openaiApi,
  baseUrl,
  baseAdminV1Url: `${baseUrl}/admin/api/v1/`,
};
