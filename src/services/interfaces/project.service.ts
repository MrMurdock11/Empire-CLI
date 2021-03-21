export interface IProjectService {
	/**
	 * Инициализирует проект.
	 *
	 * @param {string} name Наименование проекта.
	 * @memberof IProjectService
	 */
	initProject(name: string): void;
}
