export interface ICommand {
	/**
	 * Исполняет команду.
	 *
	 * @param {...any[]} args Аргументы для команды.
	 * @memberof ICommand
	 */
	execute(...args: any[]): void;
}
