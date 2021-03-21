import autobind from "autobind-decorator";
import { inject, injectable } from "inversify";
import { SERVICES } from "../di/types/service.types";
import { IProjectService } from "../services/interfaces/project.service";
import { ICommand } from "./interfaces/command";

/**
 * Команда для инициализации проектов.
 *
 * @export
 * @class InitProjectCommand
 * @implements {ICommand}
 */
@injectable()
export class InitProjectCommand implements ICommand {
	@inject(SERVICES.Project)
	private readonly projectService!: IProjectService;

	/** @inheritdoc */
	@autobind
	public execute(name: string) {
		this.projectService.initProject(name);
	}
}
