const agent = process.env.npm_config_user_agent;
const { error } = console;

if (!agent.startsWith('yarn')) {
  error('\nPlease use yarn to manage dependencies in this repository.\n  $ npm i yarn -g\n');
  process.exit(1);
}
