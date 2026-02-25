import type { DisplaySettingsFragment } from '../../../../__generated/sdk.ts';
import { getDictionaryFromDisplaySettings } from '../../../graphql/shared/displaySettingsHelpers.ts';

export function getHeroStyles(displaySettings: DisplaySettingsFragment[]): {
    gradientClass: string;
    textBlockWidthClass: string;
    textClasses: string[];
    justifyClass: string;
    heightClass: string;
    imageFitClass: string;
} {
    const settings: Record<string, string> =
        getDictionaryFromDisplaySettings(displaySettings);

    const textPlacemenTintLevel = settings['text_placement'] ?? 'center';
    let justifyClass = '';
    let textClasses = [];
    let gradientClass = '';
    let textBlockWidthClass = '';
    switch (textPlacemenTintLevel) {
        case 'left':
            textClasses.push('text-left');
            justifyClass = 'justify-start';
            gradientClass = 'bg-gradient-to-r from-black/80 via-black/50 to-transparent';
            textBlockWidthClass = 'w-full md:w-1/2';
            break;
        case 'right':
            textClasses.push('text-right');
            justifyClass = 'justify-end';
            gradientClass = 'bg-gradient-to-l from-black/80 via-black/50 to-transparent';
            textBlockWidthClass = 'w-full md:w-1/2';
            break;
        default:
            textClasses.push('text-center');
            justifyClass = 'justify-center';
            gradientClass = 'bg-black/30';
            textBlockWidthClass = '';
            break;
    }

    const textColor = settings['text_color'] ?? 'white';
    switch (textColor) {
        case 'default':
            // Don't add any class, use theme default
            break;
        case 'white':
            textClasses.push('text-white');
            break;
        case 'black':
            textClasses.push('text-black');
            break;
        case 'neutral':
            textClasses.push('text-neutral');
            break;
        case 'primary':
            textClasses.push('text-primary');
            break;
        case 'secondary':
            textClasses.push('text-secondary');
            break;
        case 'accent':
            textClasses.push('text-accent');
            break;
        case 'info':
            textClasses.push('text-info');
            break;
        case 'success':
            textClasses.push('text-success');
            break;
        case 'warning':
            textClasses.push('text-warning');
            break;
        case 'error':
            textClasses.push('text-error');
            break;
        default:
            textClasses.push('text-white');
            break;
    }
    const heroHeight = settings['hero_height'] ?? 'h_48rem';
    let heightClass = '';
    switch (heroHeight) {
        case 'h_18rem':
            heightClass = 'h-[18rem]';
            break;
        case 'h_28rem':
            heightClass = 'h-[28rem]';
            break;
        case 'h_38rem':
            heightClass = 'h-[38rem]';
            break;
        case 'h_48rem':
            heightClass = 'h-[48rem]';
            break;
        default:
            heightClass = 'h-[48rem]';
            break;
    }
    const imageFit = settings['image_fit'] ?? 'object_cover';
    let imageFitClass = '';
    switch (imageFit) {
        case 'object_cover':
            imageFitClass = 'object-cover';
            break;
        case 'object_contain':
            imageFitClass = 'object-contain';
            break;
        case 'object_fill':
            imageFitClass = 'object-fill';
            break;
        default:
            imageFitClass = 'object-cover';
            break;
    }
    
    return { gradientClass, textBlockWidthClass, textClasses, justifyClass, heightClass, imageFitClass };
}
