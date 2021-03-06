import { formatDate } from './formatDate'

describe(formatDate.name, () => {
  test('格式化正常', () => {
    expect(
      formatDate(
        new Date(2020, 5 - 1, 20, 13, 45, 8),
        _ => `${_.y}年${_.m}月${_.d}日${_.h}时${_.i}分${_.s}秒`,
      ),
    ).toBe('2020年5月20日13时45分8秒')

    expect(
      formatDate(
        new Date(2020, 5 - 1, 20, 13, 45, 8),
        _ => `${_.yyyy}年${_.mm}月${_.dd}日${_.hh}时${_.ii}分${_.ss}秒`,
      ),
    ).toBe('2020年05月20日13时45分08秒')

    expect(
      formatDate(
        new Date(2020, 5 - 1, 20, 13, 45, 8).getTime(),
        _ => `${_.yyyy}年${_.mm}月${_.dd}日${_.hh}时${_.ii}分${_.ss}秒`,
      ),
    ).toBe('2020年05月20日13时45分08秒')

    expect(
      formatDate(
        Math.round(new Date(2020, 5 - 1, 20, 13, 45, 8).getTime() / 1000),
        _ => `${_.yyyy}年${_.mm}月${_.dd}日${_.hh}时${_.ii}分${_.ss}秒`,
      ),
    ).toBe('2020年05月20日13时45分08秒')
  })
})
