🏠 > [kostock](../../) > [principles](../) > [수식관리자](./) > `시스템트레이딩`

<table>
  <tr>
    <td><a href="formula01.md">기술적지표</a></td>
    <td><a href="formula02.md">신호검색</a></td>
    <td><a href="formula03.md">시스템트레이딩</a></td>
    <td><a href="formula04.md">강세약세</a></td>
    <td><a href="formula05.md">일반함수</a></td>
    <td><b href="formula06.md">매매기법활용</b></td>
  </tr>
</table>

---
# 매매기법활용

### INDEX
- []()

---
## 상한가첫눌림 매매

# 상한가눌림 매매 (30분봉)
최근상한가 종목의 첫눌림 과매도구간을 공략
30분봉 차트에서 기준봉 중간아래의 첫눌림 과매도구간에서 매수하여 15%~20% 익절을 목표

---
■ sw[상한가.m] : 상한가일자
[수식]
```js
상한 = ValueWhen(1, DayClose() > PreDayClose()*1.29, DayOpen());
조건 = countsince(DayClose() > PreDayClose()*1.29, date(1)!=date);
만일(1>조건, 상한, 0)
```

---
■ sn[상한가.m] : 매수신호
[수식]
```js
매 = ValueWhen(1, DayClose() > PreDayClose()*1.29, DayClose());
수 = ValueWhen(1, DayClose() > PreDayClose()*1.29, DayOpen());
가 = floor(((매+수)/2)*0.98);

(C <= 가) && Crossup(Stochasticsslow(20,10), 20)
```

---
■ ln[상한가.m] : 매도선
[수식]
```js
매 = ValueWhen(1, DayClose() > PreDayClose()*1.29, DayClose());
수 = ValueWhen(1, DayClose() > PreDayClose()*1.29, DayOpen());
가 = floor(((매+수)/2)*0.98);

신호 = (C <= 가) && Crossup(Stochasticsslow(20,10), 20);

ValueWhen(1, 신호, (H+L)/1.7)
```

<br/>

[[TOP]](#index)

---