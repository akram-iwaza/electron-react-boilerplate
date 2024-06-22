interface IPropsMainSettings {}

interface ICreateOrUpdateSettingsResponse {
  discordWebhook: string | undefined;
  etherscanKey: string | undefined;
  nodeKey: string | undefined;
  blockNativeKey: string | undefined;
  mempool: string | undefined;
  delay: number | undefined;
  licenceKey: string | undefined;
}
