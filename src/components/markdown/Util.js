// import DictFirstletter from './DictFirstletter'

let toneMap =
{
  'ā': 'a1',
  'á': 'a2',
  'ǎ': 'a3',
  'à': 'a4',
  'ō': 'o1',
  'ó': 'o2',
  'ǒ': 'o3',
  'ò': 'o4',
  'ē': 'e1',
  'é': 'e2',
  'ě': 'e3',
  'è': 'e4',
  'ī': 'i1',
  'í': 'i2',
  'ǐ': 'i3',
  'ì': 'i4',
  'ū': 'u1',
  'ú': 'u2',
  'ǔ': 'u3',
  'ù': 'u4',
  'ü': 'v0',
  'ǖ': 'v1',
  'ǘ': 'v2',
  'ǚ': 'v3',
  'ǜ': 'v4',
  'ń': 'n2',
  'ň': 'n3',
  '': 'm2'
}

let dict = {} // 存储所有字典数据
let util =
{
  /**
   * 根据汉字获取拼音，如果不是汉字直接返回原字符
   * @param chinese 要转换的汉字
   * @param splitter 分隔字符，默认用空格分隔
   * @param withtone 返回结果是否包含声调，默认是
   * @param polyphone 是否支持多音字，默认否
   */
  getPinyin: function (chinese, splitter, withtone, polyphone) {
    if (!chinese || /^ +$/g.test(chinese)) return ''
    splitter = splitter === undefined ? ' ' : splitter
    withtone = withtone === undefined ? true : withtone
    polyphone = polyphone === undefined ? false : polyphone
    let result = []
    if (dict.withtone) {
      let noChinese = ''
      for (let i = 0, len = chinese.length; i < len; i++) {
        let pinyin = dict.withtone[chinese[i]]
        if (pinyin) {
          // 如果不需要多音字，默认返回第一个拼音，后面的直接忽略
          // 所以这对数据字典有一定要求，常见字的拼音必须放在最前面
          if (!polyphone) pinyin = pinyin.replace(/ .*$/g, '')
          if (!withtone) pinyin = this.removeTone(pinyin)
          result.push(pinyin)
        } else if (!chinese[i] || /^ +$/g.test(chinese[i])) {
        } else {
          noChinese += chinese[i]
        }
      }
      if (noChinese) {
        result.push(noChinese)
        noChinese = ''
      }
    } else if (dict.notone) {
      if (withtone) console.warn('pinyin_dict_notone 字典文件不支持声调！')
      if (polyphone) console.warn('pinyin_dict_notone 字典文件不支持多音字！')
      let noChinese = ''
      for (let i = 0, len = chinese.length; i < len; i++) {
        let temp = chinese.charAt(i)
        let pinyin = dict.notone[temp]
        if (pinyin) { // 插入拼音
          result.push(pinyin)
        } else if (!temp || /^ +$/g.test(temp)) {
        } else {
          // 非空格，关联到noChinese中
          noChinese += temp
        }
      }

      if (noChinese) {
        result.push(noChinese)
        noChinese = ''
      }
    }
    if (!polyphone) return result.join(splitter)
    else {
      if (window.pinyin_dict_polyphone) return parsePolyphone(chinese, result, splitter, withtone)
      else return handlePolyphone(result, ' ', splitter)
    }
  },
  /**
   * 获取汉字的拼音首字母
   * @param str 汉字字符串，如果遇到非汉字则原样返回
   * @param polyphone 是否支持多音字，默认false，如果为true，会返回所有可能的组合数组
   */
  getFirstLetter: function (str, polyphone) {
    polyphone = polyphone === undefined ? false : polyphone
    if (!str || /^ +$/g.test(str)) return ''
    if (dict.firstletter) {
      let result = []
      for (let i = 0; i < str.length; i++) {
        let unicode = str.charCodeAt(i)
        let ch = str.charAt(i)
        if (unicode >= 19968 && unicode <= 40869) {
          ch = dict.firstletter.all.charAt(unicode - 19968)
          if (polyphone) ch = dict.firstletter.polyphone[unicode] || ch
        }
        result.push(ch)
      }
      if (!polyphone) return result.join('') // 如果不用管多音字，直接将数组拼接成字符串
      else return handlePolyphone(result, '', '') // 处理多音字，此时的result类似于：['D', 'ZC', 'F']
    } else {
      let py = this.getPinyin(str, ' ', false, polyphone)
      py = py instanceof Array ? py : [py]
      let result = []
      for (let i = 0; i < py.length; i++) {
        result.push(py[i].replace(/(^| )(\w)\w*/g, function (m, $1, $2) { return $2.toUpperCase() }))
      }
      if (!polyphone) return result[0]
      else return simpleUnique(result)
    }
  },
  /**
   * 拼音转汉字，只支持单个汉字，返回所有匹配的汉字组合
   * @param pinyin 单个汉字的拼音，可以包含声调
   */
  getHanzi: function (pinyin) {
    if (!dict.py2hz) {
      return
    }
    return dict.py2hz[this.removeTone(pinyin)] || ''
  },
  /**
   * 获取某个汉字的同音字，本方法暂时有问题，待完善
   * @param hz 单个汉字
   * @param sameTone 是否获取同音同声调的汉字，必须传进来的拼音带声调才支持，默认false
   */
  getSameVoiceWord: function (hz, sameTone) {
    sameTone = sameTone || false
    return this.getHanzi(this.getPinyin(hz, ' ', false))
  },
  /**
   * 去除拼音中的声调，比如将 xiǎo míng tóng xué 转换成 xiao ming tong xue
   * @param pinyin 需要转换的拼音
   */
  removeTone: function (pinyin) {
    return pinyin.replace(/[āáǎàōóǒòēéěèīíǐìūúǔùüǖǘǚǜńň]/g, function (m) { return toneMap[m][0] })
  },
  /**
   * 将数组拼音转换成真正的带标点的拼音
   * @param pinyinWithoutTone 类似 xu2e这样的带数字的拼音
   */
  getTone: function (pinyinWithoutTone) {
    let newToneMap = {}
    for (let i in toneMap) newToneMap[toneMap[i]] = i
    return (pinyinWithoutTone || '').replace(/[a-z]\d/g, function (m) {
      return newToneMap[m] || m
    })
  }
}

/**
 * 处理多音字，将类似['D', 'ZC', 'F']转换成['DZF', 'DCF']
 * 或者将 ['chang zhang', 'cheng'] 转换成 ['chang cheng', 'zhang cheng']
 */
function handlePolyphone (array, splitter, joinChar) {
  splitter = splitter || ''
  let result = ['']
  let temp = []
  for (let i = 0; i < array.length; i++) {
    temp = []
    let t = array[i].split(splitter)
    for (let j = 0; j < t.length; j++) {
      for (let k = 0; k < result.length; k++) { temp.push(result[k] + (result[k] ? joinChar : '') + t[j]) }
    }
    result = temp
  }
  return simpleUnique(result)
}

/**
 * 根据词库找出多音字正确的读音
 * 这里只是非常简单的实现，效率和效果都有一些问题
 * 推荐使用第三方分词工具先对句子进行分词，然后再匹配多音字
 * @param chinese 需要转换的汉字
 * @param result 初步匹配出来的包含多个发音的拼音结果
 * @param splitter 返回结果拼接字符
 */
function parsePolyphone (chinese, result, splitter, withtone) {
  let poly = window.pinyin_dict_polyphone
  let max = 7 // 最多只考虑7个汉字的多音字词，虽然词库里面有10个字的，但是数量非常少，为了整体效率暂时忽略之
  let temp = poly[chinese]
  if (temp) {
    temp = temp.split(' ')
    for (let i = 0; i < temp.length; i++) {
      result[i] = temp[i] || result[i]
      if (!withtone) result[i] = util.removeTone(result[i])
    }
    return result.join(splitter)
  }
  for (let i = 0; i < chinese.length; i++) {
    temp = ''
    for (let j = 0; j < max && (i + j) < chinese.length; j++) {
      if (!/^[\u2E80-\u9FFF]+$/.test(chinese[i + j])) break // 如果碰到非汉字直接停止本次查找
      temp += chinese[i + j]
      let res = poly[temp]
      if (res) {
        res = res.split(' ')
        for (let k = 0; k <= j; k++) {
          if (res[k]) result[i + k] = withtone ? res[k] : util.removeTone(res[k])
        }
        break
      }
    }
  }
  // 最后这一步是为了防止出现词库里面也没有包含的多音字词语
  for (let i = 0; i < result.length; i++) {
    result[i] = result[i].replace(/ .*$/g, '')
  }
  return result.join(splitter)
}

// 简单数组去重
function simpleUnique (array) {
  let result = []
  let hash = {}
  for (let i = 0; i < array.length; i++) {
    let key = (typeof array[i]) + array[i]
    if (!hash[key]) {
      result.push(array[i])
      hash[key] = true
    }
  }
  return result
}

util.dict = dict

export default util
