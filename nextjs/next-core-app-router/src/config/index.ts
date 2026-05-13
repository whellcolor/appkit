import { sepolia, mainnet } from '@reown/appkit/networks'
import type { AppKitNetwork } from '@reown/appkit/networks'

// Get projectId from https://dashboard.reown.com
export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID || "5022875ce6ee68917f103ff9b1e3422d" // this is a public projectId only to use on localhost

if (!projectId) {
  throw new Error('Project ID is not defined')
}

export const networks = [sepolia, mainnet] as [AppKitNetwork, ...AppKitNetwork[]]

