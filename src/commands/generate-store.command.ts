import { inject, injectable } from "inversify";
import { ICommand } from "./interfaces/command";
import autobind from "autobind-decorator";
import { IStoreService } from "../services/interfaces/store-service.interface";
import { SERVICES } from "../di/types/service.types";

/**
 * Служба по работе с хранилищем.
 *
 * @export
 * @class GenerateStoreCommand
 * @implements {ICommand}
 */
@injectable()
export class GenerateStoreCommand implements ICommand {
	@inject(SERVICES.Store)
	private readonly service!: IStoreService;

	/** @inheritdoc */
	@autobind
	public execute(name: string): void {
		try {
			this.service.generate(name);

			console.log("Store is DONE!");
		} catch (error) {
			if (error instanceof Error) {
				console.error(error.message);
				process.exit(1);
			}
		}
	}
}
