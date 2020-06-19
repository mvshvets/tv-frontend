import { RouteNamesProps } from './Routing.model'

export const PROFILE = 'profile'
export const ASSESSMENT = 'assessment'
export const QUESTIONNAIRE_TEMPLATES = 'questionnaire-templates'
export const QUESTIONNAIRE_TEMPLATES_CREATE = 'create-questionnaire-template'
export const ASSESSMENT_ASSIGNMENTS = 'assignments'
export const ASSIGNED_ASSESSMENT = 'assigned'
export const ASSESSMENT_TEMPLATES = 'templates'
export const CATALOGUE = 'catalogue'
export const CATALOGUE_ORGANIZATIONS = 'organizations'
export const CATALOGUE_COWORKERS = 'coworkers'
export const CATALOGUE_COWORKERS_RECORD = 'coworkers:id'
export const CATALOGUE_POSITIONS = 'positions'
export const CATALOGUE_JOB_PROFILES = 'job-profiles'
export const CATALOGUE_JOB_PROFILES_CREATE = 'create-job-profile'
export const CATALOGUE_COMPETENCIES = 'competencies'
export const CATALOGUE_COMPETENCIES_RECORD = 'competencies:id'
export const CATALOGUE_COMPETENCIES_GROUPS = 'competencies-groups'
export const CATALOGUE_COMPETENCIES_INDICATORS = 'competencies-indicators'

export const ROUTE_NAMES: RouteNamesProps = {
    /** Главная страница */
    MAIN: '/',
    /** Страница входа */
    AUTH: '/auth',
    /** Профиль текущего пользователя */
    PROFILE: `/${PROFILE}`,

    /** Оценка */
    ASSESSMENT: `/${ASSESSMENT}`,
    /** Список шаблонов опросных листов */
    QUESTIONNAIRE_TEMPLATES: `/${ASSESSMENT}/${QUESTIONNAIRE_TEMPLATES}`,
    /** Конструктор опросных листов */
    QUESTIONNAIRE_TEMPLATES_CREATE: `/${ASSESSMENT}/${QUESTIONNAIRE_TEMPLATES}/${QUESTIONNAIRE_TEMPLATES_CREATE}`,
    /** Список назначений оценки */
    ASSESSMENT_ASSIGNMENTS: `/${ASSESSMENT}/${ASSESSMENT_ASSIGNMENTS}`,
    /** Просмотр назначенных оценок */
    ASSIGNED_ASSESSMENT: `/${ASSESSMENT}/${ASSIGNED_ASSESSMENT}`,
    /** Реестр шаблонов портфеля оценки */
    ASSESSMENT_TEMPLATES: `/${ASSESSMENT}/${ASSESSMENT_TEMPLATES}`,

    /** Справочники */
    CATALOGUE: `/${CATALOGUE}`,
    /** Справочник организаций */
    CATALOGUE_ORGANIZATIONS: `/${CATALOGUE}/${CATALOGUE_ORGANIZATIONS}`,
    /** Справочник сотрудников */
    CATALOGUE_COWORKERS: `/${CATALOGUE}/${CATALOGUE_COWORKERS}`,
    /** Справочник должностей */
    CATALOGUE_POSITIONS: `/${CATALOGUE}/${CATALOGUE_POSITIONS}`,
    /** Справочник профилей должности */
    CATALOGUE_JOB_PROFILES: `/${CATALOGUE}/${CATALOGUE_JOB_PROFILES}`,
    /** Справочник профилей должности: создание записи */
    CATALOGUE_JOB_PROFILES_CREATE: `/${CATALOGUE}/${CATALOGUE_JOB_PROFILES}/${CATALOGUE_JOB_PROFILES_CREATE}`,
    /** Справочник компетенций */
    CATALOGUE_COMPETENCIES: `/${CATALOGUE}/${CATALOGUE_COMPETENCIES}`,
    /** Справочник групп компетенций */
    CATALOGUE_COMPETENCIES_GROUPS: `/${CATALOGUE}/${CATALOGUE_COMPETENCIES_GROUPS}`,
    /** Справочник индикаторов компетенций */
    CATALOGUE_COMPETENCIES_INDICATORS: `/${CATALOGUE}/${CATALOGUE_COMPETENCIES_INDICATORS}`,
}

export const BREADCRUMBS_ROUTES: RouteNamesProps = {
    [PROFILE]: 'Профиль пользователя',
    [ASSESSMENT]: 'Оценка',
    [QUESTIONNAIRE_TEMPLATES]: 'Список шаблонов опросных листов',
    [QUESTIONNAIRE_TEMPLATES_CREATE]: 'Конструктор опросных листов',
    [ASSESSMENT_ASSIGNMENTS]: 'Список назначений оценки',
    [ASSIGNED_ASSESSMENT]: 'Просмотр назначенных оценок',
    [ASSESSMENT_TEMPLATES]: 'Реестр шаблонов портфеля оценки',
    [CATALOGUE]: 'Справочники',
    [CATALOGUE_ORGANIZATIONS]: 'Справочник организаций',
    [CATALOGUE_COWORKERS]: 'Справочник сотрудников',
    [CATALOGUE_COWORKERS_RECORD]: 'Карточка сотрудника',
    [CATALOGUE_POSITIONS]: 'Справочник должностей',
    [CATALOGUE_JOB_PROFILES]: 'Справочник профилей должности',
    [CATALOGUE_JOB_PROFILES_CREATE]: 'Создание профиля должности',
    [CATALOGUE_COMPETENCIES]: 'Справочник компетенций',
    [CATALOGUE_COMPETENCIES_RECORD]: 'Карточка компетенции',
    [CATALOGUE_COMPETENCIES_GROUPS]: 'Справочник групп компетенций',
    [CATALOGUE_COMPETENCIES_INDICATORS]: 'Справочник индикаторов компетенций',
}
