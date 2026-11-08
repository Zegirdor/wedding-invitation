const [major, minor] = process.versions.node.split('.').map(Number);

if (major < 26 || (major >= 26 && minor < 13)) {
  console.error(`Node 26.13.0+ required. Current: ${process.version}`);
  process.exit(1);
}
