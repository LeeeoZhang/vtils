/**
 * 基础工具库。基于 {@link https://lodash.com/docs/4.17.15 | Lodash}。
 *
 * @packageDocumentation
 */

/* istanbul ignore file */

export * from 'lodash-es'

// @index(['./**/*.ts', '!./**/*.test.*'], f => `export * from '${f.path}'`)
export * from './base64'
export * from './bindEvent'
export * from './createSubmit'
export * from './createUrlQueryString'
export * from './dedent'
export * from './EventBus'
export * from './formatNumber'
export * from './getEnvironment'
export * from './getWechatPublicAccountQrcodeUrl'
export * from './inAndroid'
export * from './inBrowser'
export * from './inDeno'
export * from './indent'
export * from './inIOS'
export * from './inMiniProgram'
export * from './inNodeJS'
export * from './inTaro'
export * from './inWechatWebView'
export * from './isChineseIDCardNumber'
export * from './isNumeric'
export * from './isPossibleChineseMobilePhoneNumber'
export * from './isPromiseLike'
export * from './isUrl'
export * from './keysStrict'
export * from './loadResource'
export * from './md5'
export * from './move'
export * from './omitStrict'
export * from './onceMeanwhile'
export * from './parseUrlQueryString'
export * from './pickStrict'
export * from './placeKitten'
export * from './readFile'
export * from './RichUrl'
export * from './run'
export * from './swap'
export * from './traverse'
export * from './wait'
export * from './Wechat'
// @endindex
