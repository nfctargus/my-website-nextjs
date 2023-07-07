import { FC } from 'react';
type Props = {
    icon:any;
    text?:string;
};
export const SocialIcons:FC<Props> = ({icon,text}) => {
    return (
            <div className="sidebar-icon group">
                {icon}
                {text && (
                    <span className="sidebar-tooltip group-hover:scale-100">
                        {text}
                    </span>
                )}
            </div>
    )
}