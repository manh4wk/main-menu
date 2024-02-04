import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin,
} from '@jupyterlab/application';

/**
 * Initialization data for the main menu example.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'main-menu',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    const { commands } = app;

    // Add a command
    const command = 'jlab-examples:main-menu';
    commands.addCommand(command, {
      label: 'Execute jlab-examples:main-menu Command',
      caption: 'Execute jlab-examples:main-menu Command',
      execute: (args: any) => {
        console.log(
          `jlab-examples:main-menu has been called ${args['origin']}.`
        );
      },
    });

  },
};

export default extension;
