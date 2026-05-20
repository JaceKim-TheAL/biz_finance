🏠 > [kostock](../../../) > [principles](../../) > [수식관리자](../) > [매매기법활용](../formula06.md) > `[스윙] RN존.눌림 매매`

<table>
  <tr>
    <td><a href="../formula01.md">기술적지표</a></td>
    <td><a href="../formula02.md">신호검색</a></td>
    <td><a href="../formula03.md">시스템트레이딩</a></td>
    <td><a href="../formula04.md">강세약세</a></td>
    <td><a href="../formula05.md">일반함수</a></td>
    <td><a href="../formula06.md">매매기법활용</a></td>
  </tr>
  <tr>
    <td colspan="6" align="right">
      <table>
        <tr align="center">
          <td width="120"><a href="./단타_상한가첫눌림.md">상한가첫눌림</a></td>
          <td width="120"><b href="./스윙_RN존_눌림.md">RN존.눌림</b></td>
        </tr>
      </table>
    </td>
  </tr>
</table>

---
# 매매기법활용

### INDEX
- [RN존.눌림 매매](#스윙-rn존눌림-매매)
  - [수식 : 강세구간](#-sw상한가m--상한가강세구간)
  - [수식 : 매수신호](#-sn상한가m--매수신호)
  - [수식 : 매도라인](#-ln상한가m--매도라인)

---
## [스윙] RN존.눌림 매매
> - 최근상한가 종목중에서 첫눌림구간을 공략하는 단타스윙 (1주이내)
> - 매수: 30분봉 차트에서 상한 첫눌림 과매도 매수신호를 포착하여 종가에 매수
> - 매도: 매수신호다음의 매도선 부근에서 분할매도, 15%~20% 익절을 목표

---
### 📊 sw[상한가.m] : 상한가(강세구간🟧)
[수식]
```js
상한 = ValueWhen(1, DayClose() > PreDayClose()*1.29, DayOpen());
조건 = countsince(DayClose() > PreDayClose()*1.29, date(1)!=date);

if(1>조건, 상한, 0)
```
<br/>

### 🔍 sn[상한가.m] : 매수신호⇧
[수식]
```js
상한C = ValueWhen(1, DayClose() > PreDayClose()*1.29, DayClose());
상한O = ValueWhen(1, DayClose() > PreDayClose()*1.29, DayOpen());
중심가 = (상한C+상한O)/2;
눌림가 = floor(중심가*0.98);
매수신호 = (C <= 눌림가) && Crossup(Stochasticsslow(20,10), 20);

매수신호
```
<br/>

### 🎯 ln[상한가.m] : 매도라인
[수식]
```js
상한C = ValueWhen(1, DayClose() > PreDayClose()*1.29, DayClose());
상한O = ValueWhen(1, DayClose() > PreDayClose()*1.29, DayOpen());
중심가 = (상한C+상한O)/2;
눌림가 = floor(중심가*0.98);
매수신호 = (C <= 눌림가) && Crossup(Stochasticsslow(20,10), 20);
매도라인 = ValueWhen(1, 매수신호, (H+L)/1.7);

매도라인
```

<br/>

[[TOP]](#index)

---