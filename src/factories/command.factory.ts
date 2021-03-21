import { ICommand } from "../commands/interfaces/command";
import DIContainer from "../di/inversify.config";

/**
 * Создает экземпляр команды.
 *
 * @export
 * @param {symbol} type Тип команды.
 * @return {ICommand} Команда.
 */
export function createCommand(type: symbol): ICommand {
	return DIContainer.get<ICommand>(type);
}
