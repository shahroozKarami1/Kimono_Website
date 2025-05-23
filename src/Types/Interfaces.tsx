export interface NavBarLinksProps {
    title: string;
    link: string;
    subLinks?: NavBarLinksProps[]
}
export interface SosialMediaIconsProps {
    icon: React.ReactNode;
}
export interface CardSliderProps {
    image: string;
    topic: string;
    title: string;
}

export interface SliderProps {
    SliderData: CardSliderProps[];
}

export interface CommentCardProps {
    rateValue: number;
    commentText: string;
    name: string,
    location: string,
    profile: string,
    id: string
}
