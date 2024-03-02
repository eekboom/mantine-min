import React from 'react';
import {
    MantineColorScheme,
    rem,
    SegmentedControl,
    Tooltip,
    useComputedColorScheme,
    useMantineColorScheme
} from '@mantine/core';
import {IconBrightnessUp, IconMoonStars} from "@tabler/icons-react";

export function ThemeSwitch(): React.JSX.Element {
    const {setColorScheme} = useMantineColorScheme();
    const computedColorScheme = useComputedColorScheme('light');

    return (
        <SegmentedControl
            value={computedColorScheme}
            onChange={(value) => setColorScheme(value as MantineColorScheme)}
            size="xs"
            radius="xs"
            withItemsBorders={false}
            data={[
                {
                    value: 'dark',
                    label: (
                        <Tooltip label="Dunkler Modus">
                            <IconMoonStars style={{width: rem(16), height: rem(16)}}/>
                        </Tooltip>
                    )
                },
                {
                    value: 'light',
                    label: (
                        <Tooltip label="Heller Modus">
                            <IconBrightnessUp style={{width: rem(16), height: rem(16)}}/>
                        </Tooltip>
                    )
                }
            ]}
        />
    );
}
