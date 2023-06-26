import { component$ } from '@builder.io/qwik';
import { QwikLogo } from '../icons/qwik';
import styles from './header.module.css';

export default component$(() => {
  return (
    <header class={styles.header}>
      <div class={['container', styles.wrapper]}>
        <div class={styles.logo}>
          <a href="/" title="qwik">
            <QwikLogo height={50} width={143} />
          </a>
        </div>
        <ul class="hidden">
          <li>
            <a href="https://qwik.builder.io/docs/" target="_blank">
              Qwik Docs
            </a>
          </li>
          <li>
            <a href="https://keystatic.com/" target="_blank">
              Keystatic Docs
            </a>
          </li>

        </ul>
      </div>
    </header>
  );
});
