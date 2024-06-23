export enum Model {
  'Gemini 1.5 Pro' = 'gemini-1.5-pro',
  'Gemini 1.5 Pro Latest' = 'gemini-1.5-pro-latest',
  'Gemini 1.5 Flash' = 'gemini-1.5-flash',
  'Gemini 1.5 Flash Latest' = 'gemini-1.5-flash-latest',
  'Gemini 1.0 Pro Vision' = 'gemini-1.0-pro-vision',
  'Gemini 1.0 Pro Vision Latest' = 'gemini-1.0-pro-vision-latest',
  'Gemini 1.0 Pro' = 'gemini-1.0-pro',
  'Gemini 1.0 Pro Latest' = 'gemini-1.0-pro-latest',
  'Gemini Pro Vision' = 'gemini-pro-vision',
  'Gemini Pro' = 'gemini-pro',
}

export const OldVisionModel = ['gemini-pro-vision', 'gemini-1.0-pro-vision', 'gemini-1.0-pro-vision-latest']

export const OldTextModel = [Model['Gemini 1.0 Pro'], Model['Gemini 1.0 Pro Latest'], Model['Gemini Pro']]
