import { Option, OptionColumn, OptionContent, OptionIcon, OptionInput } from '@rocket.chat/fuselage';
import type { ComponentProps, ReactElement, ReactNode } from 'react';
import React from 'react';

type ListItemProps = {
	icon?: ComponentProps<typeof OptionIcon>['name'];
	text: ReactNode;
	input?: ReactNode;
	loading?: boolean;
	children?: ReactNode;
} & ComponentProps<typeof Option>;

const ListItem = ({ icon, text, input, children, ...props }: ListItemProps): ReactElement => (
	<Option {...props}>
		{icon && <OptionIcon name={icon} />}
		<OptionContent>{text}</OptionContent>
		{input && <OptionInput>{input}</OptionInput>}
		{children && <OptionColumn>{children}</OptionColumn>}
	</Option>
);

export default ListItem;
