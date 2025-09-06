import { PluginOption } from 'vite'

// file vite-plugin-close.ts
export default function ClosePlugin(): PluginOption {
  return {
      name: 'ClosePlugin', // required, will show up in warnings and errors


      // use this to catch errors when building
      buildEnd(error: Error) {
          if (error) {
              console.error('Error bundling')
              console.error(error)
              process.exit(1)
          } else {
              console.log('Build ended')
          }
      },

      // use this to catch the end of a build without errors
      closeBundle(_id: string) {
          console.log('Bundle closed')
          process.exit(0)
      },
  } as unknown as PluginOption
}
