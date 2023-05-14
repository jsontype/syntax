/**
 * ブラウザのすべてのDOM要素に対してアウトラインの色を付ける
 * アウトラインの色はランダム
 * @returns
 */
const enableCSSLayoutColor = () =>
  [].forEach.call(
    document.querySelectorAll("*"),
    (dom: any) =>
      (dom.style.outline =
        "1px solid #" + (~~(Math.random() * (1 << 24))).toString(16))
  )

/**
 * ブラウザのすべてのDOM要素に対してアウトラインの色を外す
 * @returns
 */
const unableCSSLayoutColor = () =>
  [].forEach.call(
    document.querySelectorAll("*"),
    (dom: any) => (dom.style.outline = "unset")
  )

/**
 * ブラウザ側のDOMレイアウトのデッバック状態をコントロールする
 * @param isDebug 更新するDOMレイアウトのデッバック状態
 */
const controlCSSLayoutColor = (isDebug: boolean) => {
  if (isDebug) {
    enableCSSLayoutColor()
  } else {
    unableCSSLayoutColor()
  }
}

export { controlCSSLayoutColor }
