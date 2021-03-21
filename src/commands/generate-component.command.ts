import { inject, injectable } from "inversify";
import { SERVICES } from "../di/types/service.types";
import { GenerateComponentOptions } from "../options/generate-component.options";
import autobind from "autobind-decorator";
import {
	IComponentService,
	ReduxType,
} from "../services/interfaces/component-service.interface";
import { ICommand } from "./interfaces/command";

/**
 * Команда для генерации компонента.
 *
 * @export
 * @class GenerateComponentCommand
 * @implements {ICommand}
 */
@injectable()
export class GenerateComponentCommand implements ICommand {
	/**
	 * Служба по работе с компонентами.
	 *
	 * @private
	 * @type {IComponentService}
	 * @memberof GenerateComponentCommand
	 */
	@inject(SERVICES.Component)
	private componentService!: IComponentService;

	/** @inheritdoc */
	@autobind
	public execute(name: string, options: GenerateComponentOptions): void {
		try {
			const { cssModule, redux } = options;

			this.componentService.generate(name, {
				useCssModule: cssModule,
				reduxType: <ReduxType>redux ?? ReduxType.NONE,
			});

			console.log("Component is DONE!");
		} catch (error) {
			if (error instanceof Error) {
				console.error(error.message);
				process.exit(1);
			}
		}
	}
}
