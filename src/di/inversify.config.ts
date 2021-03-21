import { Container } from "inversify";
import { ComponentService } from "../services/component.service";
import { FileSystemService } from "../services/file-system.service";
import { StoreService } from "../services/store.service";
import { IComponentService } from "../services/interfaces/component-service.interface";
import { IStoreService } from "../services/interfaces/store-service.interface";
import { IFileSystemService } from "../services/interfaces/file-system-service.interface";
import { SERVICES } from "./types/service.types";
import { PROVIDERS } from "./types/provider.types";
import { IComponentProvider } from "../providers/interfaces/component.provider.interface";
import { ComponentProvider } from "../providers/component.provider";
import { IStoreProvider } from "../providers/interfaces/store.provider.interface";
import { StoreProvider } from "../providers/store.provider";
import { ICommand } from "../commands/interfaces/command";
import { COMMANDS } from "./types/command.types";
import { InitProjectCommand } from "../commands/init-project.command";
import { IProjectService } from "../services/interfaces/project.service";
import { ProjectService } from "../services/project.service";
import { GenerateComponentCommand } from "../commands/generate-component.command";
import { GenerateStoreCommand } from "../commands/generate-store.command";

const DIContainer = new Container();

//#region Services

DIContainer.bind<IComponentService>(SERVICES.Component).to(ComponentService);
DIContainer.bind<IStoreService>(SERVICES.Store).to(StoreService);
DIContainer.bind<IFileSystemService>(SERVICES.FileSystem).toConstantValue(
	new FileSystemService(process.cwd())
);
DIContainer.bind<IProjectService>(SERVICES.Project).to(ProjectService);

//#endregion

//#region Providers

DIContainer.bind<IComponentProvider>(PROVIDERS.Component).to(ComponentProvider);
DIContainer.bind<IStoreProvider>(PROVIDERS.Store).to(StoreProvider);

//#endregion

//#region Commands

DIContainer.bind<ICommand>(COMMANDS.InitProject).to(InitProjectCommand);
DIContainer.bind<ICommand>(COMMANDS.GenerateComponent).to(
	GenerateComponentCommand
);
DIContainer.bind<ICommand>(COMMANDS.GenerateStore).to(GenerateStoreCommand);

//#endregion

export default DIContainer;
