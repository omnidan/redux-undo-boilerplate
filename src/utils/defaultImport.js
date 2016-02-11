export default function defaultImport (module) {
  if (module.__esModule && module.default) {
    return module.default
  } else {
    return module
  }
}
