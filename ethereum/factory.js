import web3 from './web3'
import CampaignFactory from './build/CampaignFactory.json'

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xbC1ba082315A7296A5Be7b45f5C200694cEbfcf6'
)

export default instance