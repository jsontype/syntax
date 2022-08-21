import React from 'react'
import classNames from 'classnames'
import './Button.scss'

function Button ({ children, size }) {
    // classNames 를 사용하면 다음과 같이 조건부 스타일링을 할 때 함수의 인자에 문자열, 배열, 객체 등을 전달하여 손쉽게 문자열을 조합 할 수 있다.
    // classNames('foo', 'bar'); // => 'foo bar'
    // classNames('foo', { bar: true }); // => 'foo bar'
    // classNames({ 'foo-bar': true }); // => 'foo-bar'
    // classNames({ 'foo-bar': false }); // => ''
    // classNames({ foo: true }, { bar: true }); // => 'foo bar'
    // classNames({ foo: true, bar: true }); // => 'foo bar'
    // classNames(['foo', 'bar']); // => 'foo bar'
    // classNames('foo', { bar: true, duck: false }, 'baz', { quux: true }); // => 'foo bar baz quux'
    // classNames(null, false, 'bar', undefined, 0, 1, { baz: null }, ''); // => 'bar 1' (* false, null, 0, undefined 는 무시된다.)
    return <button className={classNames('Button', size)}>{children}</button> // classnames 사용 후
    // return <button className={['Button', size].join(' ')}>{children}</button> // classnames 사용 전
}

Button.defaultProps = {
    size: 'medium'
}

export default Button