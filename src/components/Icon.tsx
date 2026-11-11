/**
 * Inline SVG icons. The path data will be taken from Font Awesome Free
 * (https://fontawesome.com, icons licensed CC BY 4.0) in step 5 of
 * docs/refactor-plan.md. Until then each icon renders an empty box.
 */
export const iconNames = [
  'github',
  'linkedin',
  'envelope',
  'terminal',
  'database',
  'code',
  'html5',
  'bootstrap',
  'drupal',
  'universal-access',
  'git-alt',
  'jira',
] as const;

export type IconName = (typeof iconNames)[number];

interface IconProps {
  name: IconName;
  className?: string;
}

export default function Icon({ name, className }: IconProps) {
  return (
    <svg
      className={className}
      data-icon={name}
      viewBox="0 0 512 512"
      width="1em"
      height="1em"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    />
  );
}
