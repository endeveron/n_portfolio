export type TSkill = {
  title: string;
  value?: string;
  color?: string;
};

export type TSkillCategory = {
  color: string;
  items: TSkill[];
  title?: string;
};

export type TProjectBlurImgData = {
  bg: string;
  leftScreen: string;
  mainScreen: string;
  rightScreen: string;
};

export type TProject = {
  id: string;
  title: string;
  description: string;
  stack: string[];
  color: string;
  blurImgData: TProjectBlurImgData;
};

export type TCertificate = {
  year: string;
  title: string;
  details: string;
  url: string;
};

export type TResultNotification = {
  title: string;
  message: string;
  isSuccess: boolean;
};
