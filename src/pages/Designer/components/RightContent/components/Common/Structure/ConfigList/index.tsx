import { CSSProperties, ReactNode } from 'react';
import classnames from 'classnames';
import PlaceHolder from '../PlaceHolder';
import Container from '../Container';
import styles from './index.less';

// 基础配置的外部容器

const ConfigList = (props: { children?: ReactNode; level?: 0 | 1 }) => {
  const { children, level = 0 } = props;

  return (
    <div
      className={classnames(
        styles['design-config'],
        styles[`design-config-level-${level}`],
      )}
    >
      {children}
    </div>
  );
};

const ConfigListItemContainer = (props: { children?: ReactNode }) => {
  const { children } = props;

  return (
    <div className={styles['design-config-field-container']}>
      <Container>{children}</Container>
    </div>
  );
};

export type TConfigListItemProps = {
  label?: string | ReactNode;
  placeholder?: string | ReactNode;
  labelProps?: {
    className?: string;
    style?: CSSProperties;
    title?: string;
    level?: 1 | 2 | 3;
  };
  children?: ReactNode;
};

// 基础配置的容器的每一项
const ConfigListItem = (props: TConfigListItemProps) => {
  const {
    label,
    labelProps: { className, style, title, level } = {},
    placeholder,
    children,
  } = props;

  return (
    <div
      className={classnames(
        styles['design-config-field'],
        'dis-flex',
        'pos-re',
        'design-config-format-font-size',
      )}
    >
      <PlaceHolder>{placeholder}</PlaceHolder>

      <div
        className={classnames(
          'text-ellipsis',
          styles['design-config-field-title'],
          styles[`design-config-field-title-level${level}`],
          className,
        )}
        style={style}
        title={title || (typeof label === 'string' ? label : '')}
      >
        {label}
      </div>
      <ConfigListItemContainer>{children}</ConfigListItemContainer>
    </div>
  );
};

const WrapperConfigList: typeof ConfigList & {
  Item: typeof ConfigListItem;
} = ConfigList as any;

WrapperConfigList.Item = ConfigListItem;

export default WrapperConfigList;
