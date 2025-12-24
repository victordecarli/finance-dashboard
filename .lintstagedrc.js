import { relative } from 'path'

const buildEslintCommand = (filenames) =>
  `eslint --fix ${filenames
    .map((f) => `"${relative(process.cwd(), f)}"`)
    .join(' ')}`

const createLintStagedConfig = () => ({
  '*.{js,jsx,ts,tsx}': [buildEslintCommand],
})

export default createLintStagedConfig