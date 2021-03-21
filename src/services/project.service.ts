import { injectable } from "inversify";
import { IProjectService } from "./interfaces/project.service";

/**
 * Служба по работе с проектом.
 *
 * @export
 * @class ProjectService
 * @implements {IProjectService}
 */
@injectable()
export class ProjectService implements IProjectService {
	/** @inheritdoc */
	public initProject(name: string): void {
		console.log(`Initialize project with name "${name}".`);
	}
}
