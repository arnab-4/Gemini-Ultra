export const Model = {
  'Gemini 3.5 Flash': 'gemini-3.5-flash',
  'Gemini 2.5 Pro': 'gemini-2.5-pro',
  'Gemini 2.5 Flash': 'gemini-2.5-flash',
  'Gemini 3.1 Flash-Lite': 'gemini-3.1-flash-lite',
  'Gemini 2.5 Flash-Lite': 'gemini-2.5-flash-lite',
} as const

export type Model = (typeof Model)[keyof typeof Model]

export const DefaultModel = Model['Gemini 3.5 Flash']
export const DefaultModelList: string[] = Object.values(Model)

export const LegacyVisionModel = ['gemini-pro-vision', 'gemini-1.0-pro-vision', 'gemini-1.0-pro-vision-latest'] as const

export const LegacyTextModel = ['gemini-pro', 'gemini-1.0-pro', 'gemini-1.0-pro-latest'] as const

export const LegacyModel = [...LegacyTextModel, ...LegacyVisionModel] as const

export function supportsSystemInstruction(model: string) {
  return !LegacyModel.includes(model as (typeof LegacyModel)[number])
}
