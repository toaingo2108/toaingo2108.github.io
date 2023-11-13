export interface ContactInfoData {
  icon: string;
  title: string;
  value: string;
  href: string;
  target: string | undefined;
}
export interface SkillOptions {
  id: number;
  value?: string;
  name: string;
  experience?: string;
}
export interface SkillItemData {
  id: number;
  option: number;
  name: string;
  experience: string;
}
export interface SkillsData {
  options: Array<SkillOptions>;
  items: Array<SkillItemData>;
}
