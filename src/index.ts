import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin,
} from '@jupyterlab/application';

/**
 * Initialization data for the main menu example.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'domino-menu',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    const { commands } = app;

    // User Logs
    const command1 = 'jlab-examples:main-menu1';
    commands.addCommand(command1, {
      label: 'Execute jlab-examples:main-menu1 Command',
      caption: 'Execute jlab-examples:main-menu Command1',
      execute: (args: any) => {
        console.log(
          `jlab-examples:main-menu1 has been called ${args['origin']}.`
        );
        window.open('https://discourse.jupyter.org/c/jupyterlab');
      },
    });

    // User Logs
    const command2 = 'jlab-examples:main-menu2';
    commands.addCommand(command2, {
      label: 'Execute jlab-examples:main-menu2 Command',
      caption: 'Execute jlab-examples:main-menu2 Command',
      execute: (args: any) => {
        console.log(
          `jlab-examples:main-menu2 has been called ${args['origin']}.`
        );
        window.open('https://google.com/2');
      },
    });

    // User Logs
    const command3 = 'jlab-examples:main-menu3';
    commands.addCommand(command3, {
      label: 'Execute jlab-examples:main-menu3 Command',
      caption: 'Execute jlab-examples:main-menu3 Command',
      execute: (args: any) => {
        console.log(
          `jlab-examples:main-menu3 has been called ${args['origin']}.`
        );
        window.open('https://google.com/3');
      },
    });

    // User Logs
    const command4 = 'jlab-examples:main-menu4';
    commands.addCommand(command4, {
      label: 'Execute jlab-examples:main-menu4 Command',
      caption: 'Execute jlab-examples:main-menu4 Command',
      execute: (args: any) => {
        console.log(
          `jlab-examples:main-menu4 has been called ${args['origin']}.`
        );
        window.open('https://google.com/4');
      },
    });

  },
};

export default extension;
