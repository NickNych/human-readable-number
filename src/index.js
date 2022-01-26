module.exports = function toReadable(number) {
    return [`zero`, `one`, `two`, `three`, `four`, `five`, `six`, `seven`, `eight`, `nine`, `ten`,
        `eleven`, `twelve`, `thirteen`, `fourteen`, `fifteen`, `sixteen`, `seventeen`, `eighteen`, `nineteen`, `twenty`,
        `twenty one`, `twenty two`, `twenty three`, `twenty four`, `twenty five`, `twenty six`, `twenty seven`, `twenty eight`, `twenty nine`, `thirty`,
        `thirty one`, `thirty two`, `thirty three`, `thirty four`, `thirty five`, `thirty six`, `thirty seven`, `thirty eight`, `thirty nine`, `forty`,
        `forty one`, `forty two`, `forty three`, `forty four`, `forty five`, `forty six`, `forty seven`, `forty eight`, `forty nine`, `fifty`,
        `fifty one`, `fifty two`, `fifty three`, `fifty four`, `fifty five`, `fifty six`, `fifty seven`, `fifty eight`, `fifty nine`, `sixty`,
        `sixty one`, `sixty two`, `sixty three`, `sixty four`, `sixty five`, `sixty six`, `sixty seven`, `sixty eight`, `sixty nine`, `seventy`,
        `seventy one`, `seventy two`, `seventy three`, `seventy four`, `seventy five`, `seventy six`, `seventy seven`, `seventy eight`, `seventy nine`, `eighty`,
        `eighty one`, `eighty two`, `eighty three`, `eighty four`, `eighty five`, `six`, `eighty seven`, `eighty eight`, `eighty nine`, `ninety`,
        `ninety one`, `ninety two`, `ninety three`, `ninety four`, `ninety five`, `ninety six`, `ninety seven`, `ninety eight`, `ninety nine`, `one hundred`,
        `one hundred one`, `one hundred two`, `one hundred three`, `one hundred four`, `one hundred five`, `one hundred six`, `one hundred seven`, `one hundred eight`, `one hundred nine`, `one hundred ten`,
        `one hundred eleven`, `one hundred twelve`, `one hundred thirteen`, `one hundred fourteen`, `one hundred fifteen`, `one hundred sixteen`, `one hundred seventeen`, `one hundred eighteen`, `one hundred nineteen`, `one hundred twenty`,
        `one hundred twenty one`, `one hundred twenty two`, `one hundred twenty three`, `one hundred twenty four`, `one hundred twenty five`, `one hundred twenty six`, `one hundred twenty seven`, `one hundred twenty eight`, `one hundred twenty nine`, `one hundred thirty`,
        `one hundred thirty one`, `one hundred thirty two`, `one hundred thirty three`, `one hundred thirty four`, `one hundred thirty five`, `one hundred thirty six`, `one hundred thirty seven`, `one hundred thirty eight`, `one hundred thirty nine`, `one hundred forty`,
        `one hundred forty one`, `one hundred forty two`, `one hundred forty three`, `one hundred forty four`, `one hundred forty five`, `one hundred forty six`, `one hundred forty seven`, `one hundred forty eight`, `one hundred forty nine`, `one hundred fifty`,
        `one`, `two`, `three`, `four`, `five`, `six`, `seven`, `eight`, `nine`, `ten`,
    ][number]

}
/*`one hundred fifty one`, `one hundred fifty two`, `one hundred fifty three`, `one hundred fifty four`, `one hundred fifty five`, `one hundred fifty six`, `one hundred fifty seven`, `one hundred fifty eight`, `one hundred fifty nine`, `one hundred sixty`,
`one hundred sixty one`, `one hundred sixty two`, `one hundred sixty three`, `one hundred sixty four`, `one hundred sixty five`, `one hundred sixty six`, `one hundred sixty seven`, `one hundred sixty eight`, `one hundred sixty nine`, `one hundred seventy`,
`one hundred seventy one`, `one hundred seventy two`, `one hundred seventy three`, `one hundred seventy four`, `one hundred seventy five`, `one hundred seventy six`, `one hundred seventy seven`, `one hundred seventy eight`, `one hundred seventy nine`, `one hundred eighty`,
`one hundred eighty one`, `one hundred eighty two`, `one hundred eighty three`, `one hundred eighty four`, `one hundred eighty five`, `six`, `one hundred eighty seven`, `one hundred eighty eight`, `one hundred eighty nine`, `one hundred ninety`,
`one hundred ninety one`, `one hundred ninety two`, `one hundred ninety three`, `one hundred ninety four`, `one hundred ninety five`, `one hundred ninety six`, `one hundred ninety seven`, `one hundred ninety eight`, `one hundred ninety nine`, `two hundred`,

/*

90	ninety	девяносто
91	ninety one	девяносто один
92	ninety two	девяносто два
93	ninety three	девяносто три
94	ninety four	девяносто четыре
95	ninety five	девяносто пять
96	ninety six	девяносто шесть
97	ninety seven	девяносто семь
98	ninety eight	девяносто восемь
99	ninety nine	девяносто девять
100	one hundred	сто
101	one hundred and one	сто один
102	one hundred and two	сто два
103	one hundred and three	сто три
104	one hundred and four	сто четыре
105	one hundred and five	сто пять
106	one hundred and six	сто шесть
107	one hundred and seven	сто семь
108	one hundred and eight	сто восемь
109	one hundred and nine	сто девять
110	one hundred and ten	сто десять
111	one hundred and eleven	сто одиннадцать
112	one hundred and twelve	сто двенадцать
113	one hundred and thirteen	сто тринадцать
114	one hundred and fourteen	сто четырнадцать
115	one hundred and fifteen	сто пятнадцать
116	one hundred and sixteen	сто шестнадцать
117	one hundred and seventeen	сто семнадцать
118	one hundred and eighteen	сто восемнадцать
119	one hundred and nineteen	сто девятнадцать
120	one hundred and twenty	сто двадцать
121	one hundred and twenty one	сто двадцать один
122	one hundred and twenty two	сто двадцать два
123	one hundred and twenty three	сто двадцать три
124	one hundred and twenty four	сто двадцать четыре
125	one hundred and twenty five	сто двадцать пять
126	one hundred and twenty six	сто двадцать шесть
127	one hundred and twenty seven	сто двадцать семь
128	one hundred and twenty eight	сто двадцать восемь
129	one hundred and twenty nine	сто двадцать девять
130	one hundred and thirty	сто тридцать
131	one hundred and thirty one	сто тридцать один
132	one hundred and thirty two	сто тридцать два
133	one hundred and thirty three	сто тридцать три
134	one hundred and thirty four	сто тридцать четыре
135	one hundred and thirty five	сто тридцать пять
136	one hundred and thirty six	сто тридцать шесть
137	one hundred and thirty seven	сто тридцать семь
138	one hundred and thirty eight	сто тридцать восемь
139	one hundred and thirty nine	сто тридцать девять
140	one hundred and forty	сто сорок
141	one hundred and forty one	сто сорок один
142	one hundred and forty two	сто сорок два
143	one hundred and forty three	сто сорок три
144	one hundred and forty four	сто сорок четыре
145	one hundred and forty five	сто сорок пять
146	one hundred and forty six	сто сорок шесть
147	one hundred and forty seven	сто сорок семь
148	one hundred and forty eight	сто сорок восемь
149	one hundred and forty nine	сто сорок девять
150	one hundred and fifty	сто пятьдесят
151	one hundred and fifty one	сто пятьдесят один
152	one hundred and fifty two	сто пятьдесят два
153	one hundred and fifty three	сто пятьдесят три
154	one hundred and fifty four	сто пятьдесят четыре
155	one hundred and fifty five	сто пятьдесят пять
156	one hundred and fifty six	сто пятьдесят шесть
157	one hundred and fifty seven	сто пятьдесят семь
158	one hundred and fifty eight	сто пятьдесят восемь
159	one hundred and fifty nine	сто пятьдесят девять
160	one hundred and sixty	сто шестьдесят
161	one hundred and sixty one	сто шестьдесят один
162	one hundred and sixty two	сто шестьдесят два
163	one hundred and sixty three	сто шестьдесят три
164	one hundred and sixty four	сто шестьдесят четыре
165	one hundred and sixty five	сто шестьдесят пять
166	one hundred and sixty six	сто шестьдесят шесть
167	one hundred and sixty seven	сто шестьдесят семь
168	one hundred and sixty eight	сто шестьдесят восемь
169	one hundred and sixty nine	сто шестьдесят девять
170	one hundred and seventy	сто семьдесят
171	one hundred and seventy one	сто семьдесят один
172	one hundred and seventy two	сто семьдесят два
173	one hundred and seventy three	сто семьдесят три
174	one hundred and seventy four	сто семьдесят четыре
175	one hundred and seventy five	сто семьдесят пять
176	one hundred and seventy six	сто семьдесят шесть
177	one hundred and seventy seven	сто семьдесят семь
178	one hundred and seventy eight	сто семьдесят восемь
179	one hundred and seventy nine	сто семьдесят девять
180	one hundred and eighty	сто восемьдесят
181	one hundred and eighty one	сто восемьдесят один
182	one hundred and eighty two	сто восемьдесят два
183	one hundred and eighty three	сто восемьдесят три
184	one hundred and eighty four	сто восемьдесят четыре
185	one hundred and eighty five	сто восемьдесят пять
186	one hundred and eighty six	сто восемьдесят шесть
187	one hundred and eighty seven	сто восемьдесят семь
188	one hundred and eighty eight	сто восемьдесят восемь
189	one hundred and eighty nine	сто восемьдесят девять
190	one hundred and ninety	сто девяносто
191	one hundred and ninety one	сто девяносто один
192	one hundred and ninety two	сто девяносто два
193	one hundred and ninety three	сто девяносто три
194	one hundred and ninety four	сто девяносто четыре
195	one hundred and ninety five	сто девяносто пять
196	one hundred and ninety six	сто девяносто шесть
197	one hundred and ninety seven	сто девяносто семь
198	one hundred and ninety eight	сто девяносто восемь
199	one hundred and ninety nine	сто девяносто девять
200	two hundred	двести
201	two hundred and one	двести один
202	two hundred and two	двести два
203	two hundred and three	двести три
204	two hundred and four	двести четыре
205	two hundred and five	двести пять
206	two hundred and six	двести шесть
207	two hundred and seven	двести семь
208	two hundred and eight	двести восемь
209	two hundred and nine	двести девять
210	two hundred and ten	двести десять
211	two hundred and eleven	двести одиннадцать
212	two hundred and twelve	двести двенадцать
213	two hundred and thirteen	двести тринадцать
214	two hundred and fourteen	двести четырнадцать
215	two hundred and fifteen	двести пятнадцать
216	two hundred and sixteen	двести шестнадцать
217	two hundred and seventeen	двести семнадцать
218	two hundred and eighteen	двести восемнадцать
219	two hundred and nineteen	двести девятнадцать
220	two hundred and twenty	двести двадцать
221	two hundred and twenty one	двести двадцать один
222	two hundred and twenty two	двести двадцать два
223	two hundred and twenty three	двести двадцать три
224	two hundred and twenty four	двести двадцать четыре
225	two hundred and twenty five	двести двадцать пять
226	two hundred and twenty six	двести двадцать шесть
227	two hundred and twenty seven	двести двадцать семь
228	two hundred and twenty eight	двести двадцать восемь
229	two hundred and twenty nine	двести двадцать девять
230	two hundred and thirty	двести тридцать
231	two hundred and thirty one	двести тридцать один
232	two hundred and thirty two	двести тридцать два
233	two hundred and thirty three	двести тридцать три
234	two hundred and thirty four	двести тридцать четыре
235	two hundred and thirty five	двести тридцать пять
236	two hundred and thirty six	двести тридцать шесть
237	two hundred and thirty seven	двести тридцать семь
238	two hundred and thirty eight	двести тридцать восемь
239	two hundred and thirty nine	двести тридцать девять
240	two hundred and forty	двести сорок
241	two hundred and forty one	двести сорок один
242	two hundred and forty two	двести сорок два
243	two hundred and forty three	двести сорок три
244	two hundred and forty four	двести сорок четыре
245	two hundred and forty five	двести сорок пять
246	two hundred and forty six	двести сорок шесть
247	two hundred and forty seven	двести сорок семь
248	two hundred and forty eight	двести сорок восемь
249	two hundred and forty nine	двести сорок девять
250	two hundred and fifty	двести пятьдесят
251	two hundred and fifty one	двести пятьдесят один
252	two hundred and fifty two	двести пятьдесят два
253	two hundred and fifty three	двести пятьдесят три
254	two hundred and fifty four	двести пятьдесят четыре
255	two hundred and fifty five	двести пятьдесят пять
256	two hundred and fifty six	двести пятьдесят шесть
257	two hundred and fifty seven	двести пятьдесят семь
258	two hundred and fifty eight	двести пятьдесят восемь
259	two hundred and fifty nine	двести пятьдесят девять
260	two hundred and sixtyдвести шестьдесят
261	two hundred and sixty one	двести шестьдесят один
262	two hundred and sixty two	двести шестьдесят два
263	two hundred and sixty three	двести шестьдесят три
264	two hundred and sixty four	двести шестьдесят четыре
265	two hundred and sixty five	двести шестьдесят пять
266	two hundred and sixty six	двести шестьдесят шесть
267	two hundred and sixty seven	двести шестьдесят семь
268	two hundred and sixty eight	двести шестьдесят восемь
269	two hundred and sixty  nine	двести шестьдесят девять
270	two hundred and seventy	двести семьдесят
271	two hundred and seventy one	двести семьдесят один
272	two hundred and seventy two	двести семьдесят два
273	two hundred and seventy three	двести семьдесят три
274	two hundred and seventy four	двести семьдесят четыре
275	two hundred and seventy five	двести семьдесят пять
276	two hundred and seventy six	двести семьдесят шесть
277	two hundred and seventy seven	двести семьдесят семь
278	two hundred and seventy eight	двести семьдесят восемь
279	two hundred and seventy nine	двести семьдесят девять
280	two hundred and eighty	двести восемьдесят
281	two hundred and eighty one	двести восемьдесят один
282	two hundred and eighty two	двести восемьдесят два
283	two hundred and eighty three	двести восемьдесят три
284	two hundred and eighty four	двести восемьдесят четыре
285	two hundred and eighty five	двести восемьдесят пять
286	two hundred and eighty six	двести восемьдесят шесть
287	two hundred and eighty seven	двести восемьдесят семь
288	two hundred and eighty eight	двести восемьдесят восемь
289	two hundred and eighty nine	двести восемьдесят девять
290	two hundred and ninety	двести девяносто
291	two hundred and ninety one	двести девяносто один
292	two hundred and ninety two	двести девяносто два
293	two hundred and ninety three	двести девяносто три
294	two hundred and ninety four	двести девяносто четыре
295	two hundred and ninety five	двести девяносто пять
296	two hundred and ninety six	двести девяносто шесть
297	two hundred and ninety seven	двести девяносто семь
298	two hundred and ninety eight	двести девяносто восемь
299	two hundred and ninety nine	двести девяносто девять
300	three hundred	триста
301	three hundred and one	триста один
302	three hundred and two	триста два
303	three hundred and three	триста три
304	three hundred and four	триста четыре
305	three hundred and five	триста пять
306	three hundred and six	триста шесть
307	three hundred and seven	триста семь
308	three hundred and eight	триста восемь
309	three hundred and nine	триста девять
310	three hundred and ten	триста десять
311	three hundred and eleven	триста одиннадцать
312	three hundred and twelve	триста двенадцать
313	three hundred and thirteen	триста тринадцать
314	three hundred and fourteen	триста четырнадцать
315	three hundred and fifteen	триста пятнадцать
316	three hundred and sixteen	триста шестнадцать
317	three hundred and seventeen	триста семнадцать
318	three hundred and eighteen	триста восемнадцать
319	three hundred and nineteen	триста девятнадцать
320	three hundred and twenty	триста двадцать
321	three hundred and twenty one	триста двадцать один
322	three hundred and twenty two	триста двадцать два
323	three hundred and twenty three	триста двадцать три
324	three hundred and twenty four	триста двадцать четыре
325	three hundred and twenty five	триста двадцать пять
326	three hundred and twenty six	триста двадцать шесть
327	three hundred and twenty seven	триста двадцать семь
328	three hundred and twenty eight	триста двадцать восемь
329	three hundred and twenty nine	триста двадцать девять
330	three hundred and thirty	триста тридцать
331	three hundred and thirty one	триста тридцать один
332	three hundred and thirty two	триста тридцать два
333	three hundred and thirty three	триста тридцать три
334	three hundred and thirty four	триста тридцать четыре
335	three hundred and thirty five	триста тридцать пять
336	three hundred and thirty six	триста тридцать шесть
337	three hundred and thirty seven	триста тридцать семь
338	three hundred and thirty eight	триста тридцать восемь
339	three hundred and thirty nine	триста тридцать девять
340	three hundred and forty	триста сорок
341	three hundred and forty one	триста сорок один
342	three hundred and forty two	триста сорок два
343	three hundred and forty three	триста сорок три
344	three hundred and forty four	триста сорок четыре
345	three hundred and forty five	триста сорок пять
346	three hundred and forty six	триста сорок шесть
347	three hundred and forty seven	триста сорок семь
348	three hundred and forty eight	триста сорок восемь
349	three hundred and forty nine	триста сорок девять
350	three hundred and fifty	триста пятьдесят
351	three hundred and fifty one	триста пятьдесят один
352	three hundred and fifty two	триста пятьдесят два
353	three hundred and fifty three	триста пятьдесят три
354	three hundred and fifty four	триста пятьдесят четыре
355	three hundred and fifty five	триста пятьдесят пять
356	three hundred and fifty six	триста пятьдесят шесть
357	three hundred and fifty seven	триста пятьдесят семь
358	three hundred and fifty eight	триста пятьдесят восемь
359	three hundred and fifty nine	триста пятьдесят девять
360	three hundred and sixty	триста шестьдесят
361	three hundred and sixty one	триста шестьдесят один
362	three hundred and sixty two	триста шестьдесят два
363	three hundred and sixty three	триста шестьдесят три
364	three hundred and sixty four	триста шестьдесят четыре
365	three hundred and sixty five	триста шестьдесят пять
366	three hundred and sixty six	триста шестьдесят шесть
367	three hundred and sixty seven	триста шестьдесят семь
368	three hundred and sixty eight	триста шестьдесят восемь
369	three hundred and sixty nine	триста шестьдесят девять
370	three hundred and seventy	триста семьдесят
371	three hundred and seventy one	триста семьдесят один
372	three hundred and seventy two	триста семьдесят два
373	three hundred and seventy three	триста семьдесят три
374	three hundred and seventy four	триста семьдесят четыре
375	three hundred and seventy five	триста семьдесят пять
376	three hundred and seventy six	триста семьдесят шесть
377	three hundred and seventy seven	триста семьдесят семь
378	three hundred and seventy eight	триста семьдесят восемь
379	three hundred and seventy nine	триста семьдесят девять
380	three hundred and eighty	триста восемьдесят
381	three hundred and eighty one	триста восемьдесят один
382	three hundred and eighty two	триста восемьдесят два
383	three hundred and eighty three	триста восемьдесят три
384	three hundred and eighty four	триста восемьдесят четыре
385	three hundred and eighty five	триста восемьдесят пять
386	three hundred and eighty six	триста восемьдесят шесть
387	three hundred and eighty seven	триста восемьдесят семь
388	three hundred and eighty eight	триста восемьдесят восемь
389	three hundred and eighty nine	триста восемьдесят девять
390	three hundred and ninety	триста девяносто
391	three hundred and ninety one	триста девяносто один
392	three hundred and ninety two	триста девяносто два
393	three hundred and ninety three	триста девяносто три
394	three hundred and ninety four	триста девяносто четыре
395	three hundred and ninety five	триста девяносто пять
396	three hundred and ninety six	триста девяносто шесть
397	three hundred and ninety seven	триста девяносто семь
398	three hundred and ninety eight	триста девяносто восемь
399	three hundred and ninety nine	триста девяносто девять
400	four hundred	четыреста
401	four hundred and one	четыреста один
402	four hundred and two	четыреста два
403	four hundred and three	четыреста три
404	four hundred and four	четыреста четыре
405	four hundred and five	четыреста пять
406	four hundred and six	четыреста шесть
407	four hundred and seven	четыреста семь
408	four hundred and eight	четыреста восемь
409	four hundred and nine	четыреста девять
410	four hundred and ten	четыреста десять
411	four hundred and eleven	четыреста одиннадцать
412	four hundred and twelve	четыреста двенадцать
413	four hundred and thirteen	четыреста тринадцать
414	four hundred and fourteen	четыреста четырнадцать
415	four hundred and fifteen	четыреста пятнадцать
416	four hundred and sixteen	четыреста шестнадцать
417	four hundred and seventeen	четыреста семнадцать
418	four hundred and eighteen	четыреста восемнадцать
419	four hundred and nineteen	четыреста девятнадцать
420	four hundred and twenty	четыреста двадцать
421	four hundred and twenty one	четыреста двадцать один
422	four hundred and twenty two	четыреста двадцать два
423	four hundred and twenty three	четыреста двадцать три
424	four hundred and twenty four	четыреста двадцать четыре
425	four hundred and twenty five	четыреста двадцать пять
426	four hundred and twenty six	четыреста двадцать шесть
427	four hundred and twenty seven	четыреста двадцать семь
428	four hundred and twenty eight	четыреста двадцать восемь
429	four hundred and twenty nine	четыреста двадцать девять
430	four hundred and thirty	четыреста тридцать
431	four hundred and thirty one	четыреста тридцать один
432	four hundred and thirty two	четыреста тридцать два
433	four hundred and thirty three	четыреста тридцать три
434	four hundred and thirty four	четыреста тридцать четыре
435	four hundred and thirty five	четыреста тридцать пять
436	four hundred and thirty six	четыреста тридцать шесть
437	four hundred and thirty seven	четыреста тридцать семь
438	four hundred and thirty eight	четыреста тридцать восемь
439	four hundred and thirty nine	четыреста тридцать девять
440	four hundred and forty	четыреста сорок
441	four hundred and forty one	четыреста сорок один
442	four hundred and forty two	четыреста сорок два
443	four hundred and forty three	четыреста сорок три
444	four hundred and forty four	четыреста сорок четыре
445	four hundred and forty five	четыреста сорок пять
446	four hundred and forty six	четыреста сорок шесть
447	four hundred and forty seven	четыреста сорок семь
448	four hundred and forty eight	четыреста сорок восемь
449	four hundred and forty nine	четыреста сорок девять
450	four hundred and fifty	четыреста пятьдесят
451	four hundred and fifty one	четыреста пятьдесят один
452	four hundred and fifty two	четыреста пятьдесят два
453	four hundred and fifty three	четыреста пятьдесят три
454	four hundred and fifty four	четыреста пятьдесят четыре
455	four hundred and fifty five	четыреста пятьдесят пять
456	four hundred and fifty six	четыреста пятьдесят шесть
457	four hundred and fifty seven	четыреста пятьдесят семь
458	four hundred and fifty eight	четыреста пятьдесят восемь
459	four hundred and fifty nine	четыреста пятьдесят девять
460	four hundred and sixty	четыреста шестьдесят
461	four hundred and sixty one	четыреста шестьдесят один
462	four hundred and sixty two	четыреста шестьдесят два
463	four hundred and sixty three	четыреста шестьдесят три
464	four hundred and sixty four	четыреста шестьдесят четыре
465	four hundred and sixty five	четыреста шестьдесят пять
466	four hundred and sixty six	четыреста шестьдесят шесть
467	four hundred and sixty seven	четыреста шестьдесят семь
468	four hundred and sixty eight	четыреста шестьдесят восемь
469	four hundred and sixty nine	четыреста шестьдесят девять
470	four hundred and seventy	четыреста семьдесят
471	four hundred and seventy one	четыреста семьдесят один
472	four hundred and seventy two	четыреста семьдесят два
473	four hundred and seventy three	четыреста семьдесят три
474	four hundred and seventy four	четыреста семьдесят четыре
475	four hundred and seventy five	четыреста семьдесят пять
476	four hundred and seventy six	четыреста семьдесят шесть
477	four hundred and seventy seven	четыреста семьдесят семь
478	four hundred and seventy eight	четыреста семьдесят восемь
479	four hundred and seventy nine	четыреста семьдесят девять
480	four hundred and eighty	четыреста восемьдесят
481	four hundred and eighty one	четыреста восемьдесят один
482	four hundred and eighty two	четыреста восемьдесят два
483	four hundred and eighty three	четыреста восемьдесят три
484	four hundred and eighty four	четыреста восемьдесят четыре
485	four hundred and eighty five	четыреста восемьдесят пять
486	four hundred and eighty six	четыреста восемьдесят шесть
487	four hundred and eighty seven	четыреста восемьдесят семь
488	four hundred and eighty eight	четыреста восемьдесят восемь
489	four hundred and eighty nine	четыреста восемьдесят девять
490	four hundred and ninety	четыреста девяносто
491	four hundred and ninety one	четыреста девяносто один
492	four hundred and ninety two	четыреста девяносто два
493	four hundred and ninety three	четыреста девяносто три
494	four hundred and ninety four	четыреста девяносто четыре
495	four hundred and ninety five	четыреста девяносто пять
496	four hundred and ninety six	четыреста девяносто шесть
497	four hundred and ninety seven	четыреста девяносто семь
498	four hundred and ninety eight	четыреста девяносто восемь
499	four hundred and ninety nine	четыреста девяносто девять
500	five hundred	пятьсот
501	five hundred and one	пятьсот один
502	five hundred and two	пятьсот два
503	five hundred and three	пятьсот три
504	five hundred and four	пятьсот четыре
505	five hundred and five	пятьсот пять
506	five hundred and six	пятьсот шесть
507	five hundred and seven	пятьсот семь
508	five hundred and eight	пятьсот восемь
509	five hundred and nine	пятьсот девять
510	five hundred and ten	пятьсот десять
511	five hundred and eleven	пятьсот одиннадцать
512	five hundred and twelve	пятьсот двенадцать
513	five hundred and thirteen	пятьсот тринадцать
514	five hundred and fourteen	пятьсот четырнадцать
515	five hundred and fifteen	пятьсот пятнадцать
516	five hundred and sixteen	пятьсот шестнадцать
517	five hundred and seventeen	пятьсот семнадцать
518	five hundred and eighteen	пятьсот восемнадцать
519	five hundred and nineteen	пятьсот девятнадцать
520	five hundred and twenty	пятьсот двадцать
521	five hundred and twenty one	пятьсот двадцать один
522	five hundred and twenty two	пятьсот двадцать два
523	five hundred and twenty three	пятьсот двадцать три
524	five hundred and twenty four	пятьсот двадцать четыре
525	five hundred and twenty five	пятьсот двадцать пять
526	five hundred and twenty six	пятьсот двадцать шесть
527	five hundred and twenty seven	пятьсот двадцать семь
528	five hundred and twenty eight	пятьсот двадцать восемь
529	five hundred and twenty nine	пятьсот двадцать девять
530	five hundred and thirty	пятьсот тридцать
531	five hundred and thirty one	пятьсот тридцать один
532	five hundred and thirty two	пятьсот тридцать два
533	five hundred and thirty three	пятьсот тридцать три
534	five hundred and thirty four	пятьсот тридцать четыре
535	five hundred and thirty five	пятьсот тридцать пять
536	five hundred and thirty six	пятьсот тридцать шесть
537	five hundred and thirty seven	пятьсот тридцать семь
538	five hundred and thirty eight	пятьсот тридцать восемь
539	five hundred and thirty nine	пятьсот тридцать девять
540	five hundred and forty	пятьсот сорок
541	five hundred and forty one	пятьсот сорок один
542	five hundred and forty two	пятьсот сорок два
543	five hundred and forty three	пятьсот сорок три
544	five hundred and forty four	пятьсот сорок четыре
545	five hundred and forty five	пятьсот сорок пять
546	five hundred and forty six	пятьсот сорок шесть
547	five hundred and forty seven	пятьсот сорок семь
548	five hundred and forty eight	пятьсот сорок восемь
549	five hundred and forty nine	пятьсот сорок девять
550	five hundred and fifty	пятьсот пятьдесят
551	five hundred and fifty one	пятьсот пятьдесят один
552	five hundred and fifty two	пятьсот пятьдесят два
553	five hundred and fifty three	пятьсот пятьдесят три
554	five hundred and fifty four	пятьсот пятьдесят четыре
555	five hundred and fifty five	пятьсот пятьдесят пять
556	five hundred and fifty six	пятьсот пятьдесят шесть
557	five hundred and fifty seven	пятьсот пятьдесят семь
558	five hundred and fifty eight	пятьсот пятьдесят восемь
559	five hundred and fifty nine	пятьсот пятьдесят девять
560	five hundred and sixty	пятьсот шестьдесят
561	five hundred and sixty one	пятьсот шестьдесят один
562	five hundred and sixty two	пятьсот шестьдесят два
563	five hundred and sixty three	пятьсот шестьдесят три
564	five hundred and sixty four	пятьсот шестьдесят четыре
565	five hundred and sixty five	пятьсот шестьдесят пять
566	five hundred and sixty six	пятьсот шестьдесят шесть
567	five hundred and sixty seven	пятьсот шестьдесят семь
568	five hundred and sixty eight	пятьсот шестьдесят восемь
569	five hundred and sixty nine	пятьсот шестьдесят девять
570	five hundred and seventy	пятьсот семьдесят
571	five hundred and seventy one	пятьсот семьдесят один
572	five hundred and seventy two	пятьсот семьдесят два
573	five hundred and seventy three	пятьсот семьдесят три
574	five hundred and seventy four	пятьсот семьдесят четыре
575	five hundred and seventy five	пятьсот семьдесят пять
576	five hundred and seventy six	пятьсот семьдесят шесть
577	five hundred and seventy seven	пятьсот семьдесят семь
578	five hundred and seventy eight	пятьсот семьдесят восемь
579	five hundred and seventy nine	пятьсот семьдесят девять
580	five hundred and eighty	пятьсот восемьдесят
581	five hundred and eighty one	пятьсот восемьдесят один
582	five hundred and eighty two	пятьсот восемьдесят два
583	five hundred and eighty three	пятьсот восемьдесят три
584	five hundred and eighty four	пятьсот восемьдесят четыре
585	five hundred and eighty five	пятьсот восемьдесят пять
586	five hundred and eighty six	пятьсот восемьдесят шесть
587	five hundred and eighty seven	пятьсот восемьдесят семь
588	five hundred and eighty eight	пятьсот восемьдесят восемь
589	five hundred and eighty nine	пятьсот восемьдесят девять
590	five hundred and ninety	пятьсот девяносто
591	five hundred and ninety one	пятьсот девяносто один
592	five hundred and ninety two	пятьсот девяносто два
593	five hundred and ninety three	пятьсот девяносто три
594	five hundred and ninety four	пятьсот девяносто четыре
595	five hundred and ninety five	пятьсот девяносто пять
596	five hundred and ninety six	пятьсот девяносто шесть
597	five hundred and ninety seven	пятьсот девяносто семь
598	five hundred and ninety eight	пятьсот девяносто восемь
599	five hundred and ninety nine	пятьсот девяносто девять
600	six hundred	шестьсот
601	six hundred and one	шестьсот один
602	six hundred and two	шестьсот два
603	six hundred and three	шестьсот три
604	six hundred and four	шестьсот четыре
605	six hundred and five	шестьсот пять
606	six hundred and six	шестьсот шесть
607	six hundred and seven	шестьсот семь
608	six hundred and eight	шестьсот восемь
609	six hundred and nine	шестьсот девять
610	six hundred and ten	шестьсот десять
611	six hundred and eleven	шестьсот одиннадцать
612	six hundred and twelve	шестьсот двенадцать
613	six hundred and thirteen	шестьсот тринадцать
614	six hundred and fourteen	шестьсот четырнадцать
615	six hundred and fifteen	шестьсот пятнадцать
616	six hundred and sixteen	шестьсот шестнадцать
617	six hundred and seventeen	шестьсот семнадцать
618	six hundred and eighteen	шестьсот восемнадцать
619	six hundred and nineteen	шестьсот девятнадцать
620	six hundred and twenty	шестьсот двадцать
621	six hundred and twenty one	шестьсот двадцать один
622	six hundred and twenty two	шестьсот двадцать два
623	six hundred and twenty three	шестьсот двадцать три
624	six hundred and twenty four	шестьсот двадцать четыре
625	six hundred and twenty five	шестьсот двадцать пять
626	six hundred and twenty six	шестьсот двадцать шесть
627	six hundred and twenty seven	шестьсот двадцать семь
628	six hundred and twenty eight	шестьсот двадцать восемь
629	six hundred and twenty nine	шестьсот двадцать девять
630	six hundred and thirty	шестьсот тридцать
631	six hundred and thirty one	шестьсот тридцать один
632	six hundred and thirty two	шестьсот тридцать два
633	six hundred and thirty three	шестьсот тридцать три
634	six hundred and thirty four	шестьсот тридцать четыре
635	six hundred and thirty five	шестьсот тридцать пять
636	six hundred and thirty six	шестьсот тридцать шесть
637	six hundred and thirty seven	шестьсот тридцать семь
638	six hundred and thirty eight	шестьсот тридцать восемь
639	six hundred and thirty nine	шестьсот тридцать девять
640	six hundred and forty	шестьсот сорок
641	six hundred and forty one	шестьсот сорок один
642	six hundred and forty two	шестьсот сорок два
643	six hundred and forty three	шестьсот сорок три
644	six hundred and forty four	шестьсот сорок четыре
645	six hundred and forty five	шестьсот сорок пять
646	six hundred and forty six	шестьсот сорок шесть
647	six hundred and forty seven	шестьсот сорок семь
648	six hundred and forty eight	шестьсот сорок восемь
649	six hundred and forty nine	шестьсот сорок девять
650	six hundred and fifty	шестьсот пятьдесят
651	six hundred and fifty one	шестьсот пятьдесят один
652	six hundred and fifty two	шестьсот пятьдесят два
653	six hundred and fifty three	шестьсот пятьдесят три
654	six hundred and fifty four	шестьсот пятьдесят четыре
655	six hundred and fifty five	шестьсот пятьдесят пять
656	six hundred and fifty six	шестьсот пятьдесят шесть
657	six hundred and fifty seven	шестьсот пятьдесят семь
658	six hundred and fifty eight	шестьсот пятьдесят восемь
659	six hundred and fifty nine	шестьсот пятьдесят девять
660	six hundred and sixty	шестьсот шестьдесят
661	six hundred and sixty one	шестьсот шестьдесят один
662	six hundred and sixty two	шестьсот шестьдесят два
663	six hundred and sixty three	шестьсот шестьдесят три
664	six hundred and sixty four	шестьсот шестьдесят четыре
665	six hundred and sixty five	шестьсот шестьдесят пять
666	six hundred and sixty six	шестьсот шестьдесят шесть
667	six hundred and sixty seven	шестьсот шестьдесят семь
668	six hundred and sixty eight	шестьсот шестьдесят восемь
669	six hundred and sixty nine	шестьсот шестьдесят девять
670	six hundred and seventy	шестьсот семьдесят
671	six hundred and seventy one	шестьсот семьдесят один
672	six hundred and seventy two	шестьсот семьдесят два
673	six hundred and seventy three	шестьсот семьдесят три
674	six hundred and seventy four	шестьсот семьдесят четыре
675	six hundred and seventy five	шестьсот семьдесят пять
676	six hundred and seventy six	шестьсот семьдесят шесть
677	six hundred and seventy seven	шестьсот семьдесят семь
678	six hundred and seventy eight	шестьсот семьдесят восемь
679	six hundred and seventy nine	шестьсот семьдесят девять
680	six hundred and eighty	шестьсот восемьдесят
681	six hundred and eighty one	шестьсот восемьдесят один
682	six hundred and eighty two	шестьсот восемьдесят два
683	six hundred and eighty three	шестьсот восемьдесят три
684	six hundred and eighty four	шестьсот восемьдесят четыре
685	six hundred and eighty five	шестьсот восемьдесят пять
686	six hundred and eighty six	шестьсот восемьдесят шесть
687	six hundred and eighty seven	шестьсот восемьдесят семь
688	six hundred and eighty eight	шестьсот восемьдесят восемь
689	six hundred and eighty nine	шестьсот восемьдесят девять
690	six hundred and ninety	шестьсот девяносто
691	six hundred and ninety one	шестьсот девяносто один
692	six hundred and ninety two	шестьсот девяносто два
693	six hundred and ninety three	шестьсот девяносто три
694	six hundred and ninety four	шестьсот девяносто четыре
695	six hundred and ninety five	шестьсот девяносто пять
696	six hundred and ninety six	шестьсот девяносто шесть
697	six hundred and ninety seven	шестьсот девяносто семь
698	six hundred and ninety eight	шестьсот девяносто восемь
699	six hundred and ninety nine	шестьсот девяносто девять
700	seven hundred	семьсот
701	seven hundred and one	семьсот один
702	seven hundred and two	семьсот два
703	seven hundred and three	семьсот три
704	seven hundred and four	семьсот четыре
705	seven hundred and five	семьсот пять
706	seven hundred and six	семьсот шесть
707	seven hundred and seven	семьсот семь
708	seven hundred and eight	семьсот восемь
709	seven hundred and nine	семьсот девять
710	seven hundred and ten	семьсот десять
711	seven hundred and eleven	семьсот одиннадцать
712	seven hundred and twelve	семьсот двенадцать
713	seven hundred and thirteen	семьсот тринадцать
714	seven hundred and fourteen	семьсот четырнадцать
715	seven hundred and fifteen	семьсот пятнадцать
716	seven hundred and sixteen	семьсот шестнадцать
717	seven hundred and seventeen	семьсот семнадцать
718	seven hundred and eighteen	семьсот восемнадцать
719	seven hundred and nineteen	семьсот девятнадцать
720	seven hundred and twenty	семьсот двадцать
721	seven hundred and twenty one	семьсот двадцать один
722	seven hundred and twenty two	семьсот двадцать два
723	seven hundred and twenty three	семьсот двадцать три
724	seven hundred and twenty four	семьсот двадцать четыре
725	seven hundred and twenty five	семьсот двадцать пять
726	seven hundred and twenty six	семьсот двадцать шесть
727	seven hundred and twenty seven	семьсот двадцать семь
728	seven hundred and twenty eight	семьсот двадцать восемь
729	seven hundred and twenty nine	семьсот двадцать девять
730	seven hundred and thirty	семьсот тридцать
731	seven hundred and thirty one	семьсот тридцать один
732	seven hundred and thirty two	семьсот тридцать два
733	seven hundred and thirty three	семьсот тридцать три
734	seven hundred and thirty four	семьсот тридцать четыре
735	seven hundred and thirty five	семьсот тридцать пять
736	seven hundred and thirty six	семьсот тридцать шесть
737	seven hundred and thirty seven	семьсот тридцать семь
738	seven hundred and thirty eight	семьсот тридцать восемь
739	seven hundred and thirty nine	семьсот тридцать девять
740	seven hundred and forty	семьсот сорок
741	seven hundred and forty one	семьсот сорок один
742	seven hundred and forty two	семьсот сорок два
743	seven hundred and forty three	семьсот сорок три
744	seven hundred and forty four	семьсот сорок четыре
745	seven hundred and forty five	семьсот сорок пять
746	seven hundred and forty six	семьсот сорок шесть
747	seven hundred and forty seven	семьсот сорок семь
748	seven hundred and forty eight	семьсот сорок восемь
749	seven hundred and forty nine	семьсот сорок девять
750	seven hundred and fifty	семьсот пятьдесят
751	seven hundred and fifty - one	семьсот пятьдесят один
752	seven hundred and fifty - two	семьсот пятьдесят два
753	seven hundred and fifty - three	семьсот пятьдесят три
754	seven hundred and fifty - four	семьсот пятьдесят четыре
755	seven hundred and fifty - five	семьсот пятьдесят пять
756	seven hundred and fifty - six	семьсот пятьдесят шесть
757	seven hundred and fifty - seven	семьсот пятьдесят семь
758	seven hundred and fifty - eight	семьсот пятьдесят восемь
759	seven hundred and fifty - nine	семьсот пятьдесят девять
760	seven hundred and sixty	семьсот шестьдесят
761	seven hundred and sixty - one	семьсот шестьдесят один
762	seven hundred and sixty - two	семьсот шестьдесят два
763	seven hundred and sixty - three	семьсот шестьдесят три
764	seven hundred and sixty - four	семьсот шестьдесят четыре
765	seven hundred and sixty - five	семьсот шестьдесят пять
766	seven hundred and sixty - six	семьсот шестьдесят шесть
767	seven hundred and sixty - seven	семьсот шестьдесят семь
768	seven hundred and sixty - eight	семьсот шестьдесят восемь
769	seven hundred and sixty - nine	семьсот шестьдесят девять
770	seven hundred and seventy	семьсот семьдесят
771	seven hundred and seventy - one	семьсот семьдесят один
772	seven hundred and seventy - two	семьсот семьдесят два
773	seven hundred and seventy - three	семьсот семьдесят три
774	seven hundred and seventy - four	семьсот семьдесят четыре
775	seven hundred and seventy - five	семьсот семьдесят пять
776	seven hundred and seventy - six	семьсот семьдесят шесть
777	seven hundred and seventy - seven	семьсот семьдесят семь
778	seven hundred and seventy - eight	семьсот семьдесят восемь
779	seven hundred and seventy - nine	семьсот семьдесят девять
780	seven hundred and eighty	семьсот восемьдесят
781	seven hundred and eighty - one	семьсот восемьдесят один
782	seven hundred and eighty - two	семьсот восемьдесят два
783	seven hundred and eighty - three	семьсот восемьдесят три
784	seven hundred and eighty - four	семьсот восемьдесят четыре
785	seven hundred and eighty - five	семьсот восемьдесят пять
786	seven hundred and eighty - six	семьсот восемьдесят шесть
787	seven hundred and eighty - seven	семьсот восемьдесят семь
788	seven hundred and eighty - eight	семьсот восемьдесят восемь
789	seven hundred and eighty - nine	семьсот восемьдесят девять
790	seven hundred and ninety	семьсот девяносто
791	seven hundred and ninety - one	семьсот девяносто один
792	seven hundred and ninety - two	семьсот девяносто два
793	seven hundred and ninety - three	семьсот девяносто три
794	seven hundred and ninety - four	семьсот девяносто четыре
795	seven hundred and ninety - five	семьсот девяносто пять
796	seven hundred and ninety - six	семьсот девяносто шесть
797	seven hundred and ninety - seven	семьсот девяносто семь
798	seven hundred and ninety - eight	семьсот девяносто восемь
799	seven hundred and ninety - nine	семьсот девяносто девять
800	eight hundred	восемьсот
801	eight hundred and one	восемьсот один
802	eight hundred and two	восемьсот два
803	eight hundred and three	восемьсот три
804	eight hundred and four	восемьсот четыре
805	eight hundred and five	восемьсот пять
806	eight hundred and six	восемьсот шесть
807	eight hundred and seven	восемьсот семь
808	eight hundred and eight	восемьсот восемь
809	eight hundred and nine	восемьсот девять
810	eight hundred and ten	восемьсот десять
811	eight hundred and eleven	восемьсот одиннадцать
812	eight hundred and twelve	восемьсот двенадцать
813	eight hundred and thirteen	восемьсот тринадцать
814	eight hundred and fourteen	восемьсот четырнадцать
815	eight hundred and fifteen	восемьсот пятнадцать
816	eight hundred and sixteen	восемьсот шестнадцать
817	eight hundred and seventeen	восемьсот семнадцать
818	eight hundred and eighteen	восемьсот восемнадцать
819	eight hundred and nineteen	восемьсот девятнадцать
820	eight hundred and twenty	восемьсот двадцать
821	eight hundred and twenty - one	восемьсот двадцать один
822	eight hundred and twenty - two	восемьсот двадцать два
823	eight hundred and twenty - three	восемьсот двадцать три
824	eight hundred and twenty - four	восемьсот двадцать четыре
825	eight hundred and twenty - five	восемьсот двадцать пять
826	eight hundred and twenty - six	восемьсот двадцать шесть
827	eight hundred and twenty - seven	восемьсот двадцать семь
828	eight hundred and twenty - eight	восемьсот двадцать восемь
829	eight hundred and twenty - nine	восемьсот двадцать девять
830	eight hundred and thirty	восемьсот тридцать
831	eight hundred and thirty - one	восемьсот тридцать один
832	eight hundred and thirty - two	восемьсот тридцать два
833	eight hundred and thirty - three	восемьсот тридцать три
834	eight hundred and thirty - four	восемьсот тридцать четыре
835	eight hundred and thirty - five	восемьсот тридцать пять
836	eight hundred and thirty - six	восемьсот тридцать шесть
837	eight hundred and thirty - seven	восемьсот тридцать семь
838	eight hundred and thirty - eight	восемьсот тридцать восемь
839	eight hundred and thirty - nine	восемьсот тридцать девять
840	eight hundred and forty	восемьсот сорок
841	eight hundred and forty - one	восемьсот сорок один
842	eight hundred and forty - two	восемьсот сорок два
843	eight hundred and forty - three	восемьсот сорок три
844	eight hundred and forty - four	восемьсот сорок четыре
845	eight hundred and forty - five	восемьсот сорок пять
846	eight hundred and forty - six	восемьсот сорок шесть
847	eight hundred and forty - seven	восемьсот сорок семь
848	eight hundred and forty - eight	восемьсот сорок восемь
849	eight hundred and forty - nine	восемьсот сорок девять
850	eight hundred and fifty	восемьсот пятьдесят
851	eight hundred and fifty - one	восемьсот пятьдесят один
852	eight hundred and fifty - two	восемьсот пятьдесят два
853	eight hundred and fifty - three	восемьсот пятьдесят три
854	eight hundred and fifty - four	восемьсот пятьдесят четыре
855	eight hundred and fifty - five	восемьсот пятьдесят пять
856	eight hundred and fifty - six	восемьсот пятьдесят шесть
857	eight hundred and fifty - seven	восемьсот пятьдесят семь
858	eight hundred and fifty - eight	восемьсот пятьдесят восемь
859	eight hundred and fifty - nine	восемьсот пятьдесят девять
860	eight hundred and sixty	восемьсот шестьдесят
861	eight hundred and sixty - one	восемьсот шестьдесят один
862	eight hundred and sixty - two	восемьсот шестьдесят два
863	eight hundred and sixty - three	восемьсот шестьдесят три
864	eight hundred and sixty - four	восемьсот шестьдесят четыре
865	eight hundred and sixty - five	восемьсот шестьдесят пять
866	eight hundred and sixty - six	восемьсот шестьдесят шесть
867	eight hundred and sixty - seven	восемьсот шестьдесят семь
868	eight hundred and sixty - eight	восемьсот шестьдесят восемь
869	eight hundred and sixty - nine	восемьсот шестьдесят девять
870	eight hundred and seventy	восемьсот семьдесят
871	eight hundred and seventy - one	восемьсот семьдесят один
872	eight hundred and seventy - two	восемьсот семьдесят два
873	eight hundred and seventy - three	восемьсот семьдесят три
874	eight hundred and seventy - four	восемьсот семьдесят четыре
875	eight hundred and seventy - five	восемьсот семьдесят пять
876	eight hundred and seventy - six	восемьсот семьдесят шесть
877	eight hundred and seventy - seven	восемьсот семьдесят семь
878	eight hundred and seventy - eight	восемьсот семьдесят восемь
879	eight hundred and seventy - nine	восемьсот семьдесят девять
880	eight hundred and eighty	восемьсот восемьдесят
881	eight hundred and eighty - one	восемьсот восемьдесят один
882	eight hundred and eighty - two	восемьсот восемьдесят два
883	eight hundred and eighty - three	восемьсот восемьдесят три
884	eight hundred and eighty - four	восемьсот восемьдесят четыре
885	eight hundred and eighty - five	восемьсот восемьдесят пять
886	eight hundred and eighty - six	восемьсот восемьдесят шесть
887	eight hundred and eighty - seven	восемьсот восемьдесят семь
888	eight hundred and eighty - eight	восемьсот восемьдесят восемь
889	eight hundred and eighty - nine	восемьсот восемьдесят девять
890	eight hundred and ninety	восемьсот девяносто
891	eight hundred and ninety - one	восемьсот девяносто один
892	eight hundred and ninety - two	восемьсот девяносто два
893	eight hundred and ninety - three	восемьсот девяносто три
894	eight hundred and ninety - four	восемьсот девяносто четыре
895	eight hundred and ninety - five	восемьсот девяносто пять
896	eight hundred and ninety - six	восемьсот девяносто шесть
897	eight hundred and ninety - seven	восемьсот девяносто семь
898	eight hundred and ninety - eight	восемьсот девяносто восемь
899	eight hundred and ninety - nine	восемьсот девяносто девять
900	nine hundred	девятьсот
901	nine hundred and one	девятьсот один
902	nine hundred and two	девятьсот два
903	nine hundred and three	девятьсот три
904	nine hundred and four	девятьсот четыре
905	nine hundred and five	девятьсот пять
906	nine hundred and six	девятьсот шесть
907	nine hundred and seven	девятьсот семь
908	nine hundred and eight	девятьсот восемь
909	nine hundred and nine	девятьсот девять
910	nine hundred and ten	девятьсот десять
911	nine hundred and eleven	девятьсот одиннадцать
912	nine hundred and twelve	девятьсот двенадцать
913	nine hundred and thirteen	девятьсот тринадцать
914	nine hundred and fourteen	девятьсот четырнадцать
915	nine hundred and fifteen	девятьсот пятнадцать
916	nine hundred and sixteen	девятьсот шестнадцать
917	nine hundred and seventeen	девятьсот семнадцать
918	nine hundred and eighteen	девятьсот восемнадцать
919	nine hundred and nineteen	девятьсот девятнадцать
920	nine hundred and twenty	девятьсот двадцать
921	nine hundred and twenty - one	девятьсот двадцать один
922	nine hundred and twenty - two	девятьсот двадцать два
923	nine hundred and twenty - three	девятьсот двадцать три
924	nine hundred and twenty - four	девятьсот двадцать четыре
925	nine hundred and twenty - five	девятьсот двадцать пять
926	nine hundred and twenty - six	девятьсот двадцать шесть
927	nine hundred and twenty - seven	девятьсот двадцать семь
928	nine hundred and twenty - eight	девятьсот двадцать восемь
929	nine hundred and twenty - nine	девятьсот двадцать девять
930	nine hundred and thirty	девятьсот тридцать
931	nine hundred and thirty - one	девятьсот тридцать один
932	nine hundred and thirty - two	девятьсот тридцать два
933	nine hundred and thirty - three	девятьсот тридцать три
934	nine hundred and thirty - four	девятьсот тридцать четыре
935	nine hundred and thirty - five	девятьсот тридцать пять
936	nine hundred and thirty - six	девятьсот тридцать шесть
937	nine hundred and thirty - seven	девятьсот тридцать семь
938	nine hundred and thirty - eight	девятьсот тридцать восемь
939	nine hundred and thirty - nine	девятьсот тридцать девять
940	nine hundred and forty	девятьсот сорок
941	nine hundred and forty - one	девятьсот сорок один
942	nine hundred and forty - two	девятьсот сорок два
943	nine hundred and forty - three	девятьсот сорок три
944	nine hundred and forty - four	девятьсот сорок четыре
945	nine hundred and forty - five	девятьсот сорок пять
946	nine hundred and forty - six	девятьсот сорок шесть
947	nine hundred and forty - seven	девятьсот сорок семь
948	nine hundred and forty - eight	девятьсот сорок восемь
949	nine hundred and forty - nine	девятьсот сорок девять
950	nine hundred and fifty	девятьсот пятьдесят
951	nine hundred and fifty - one	девятьсот пятьдесят один
952	nine hundred and fifty - two	девятьсот пятьдесят два
953	nine hundred and fifty - three	девятьсот пятьдесят три
954	nine hundred and fifty - four	девятьсот пятьдесят четыре
955	nine hundred and fifty - five	девятьсот пятьдесят пять
956	nine hundred and fifty - six	девятьсот пятьдесят шесть
957	nine hundred and fifty - seven	девятьсот пятьдесят семь
958	nine hundred and fifty - eight	девятьсот пятьдесят восемь
959	nine hundred and fifty - nine	девятьсот пятьдесят девять
960	nine hundred and sixty	девятьсот шестьдесят
961	nine hundred and sixty - one	девятьсот шестьдесят один
962	nine hundred and sixty - two	девятьсот шестьдесят два
963	nine hundred and sixty - three	девятьсот шестьдесят три
964	nine hundred and sixty - four	девятьсот шестьдесят четыре
965	nine hundred and sixty - five	девятьсот шестьдесят пять
966	nine hundred and sixty - six	девятьсот шестьдесят шесть
967	nine hundred and sixty - seven	девятьсот шестьдесят семь
968	nine hundred and sixty - eight	девятьсот шестьдесят восемь
969	nine hundred and sixty - nine	девятьсот шестьдесят девять
970	nine hundred and seventy	девятьсот семьдесят
971	nine hundred and seventy one	девятьсот семьдесят один
972	nine hundred and seventy two	девятьсот семьдесят два
973	nine hundred and seventy three	девятьсот семьдесят три
974	nine hundred and seventy four	девятьсот семьдесят четыре
975	nine hundred and seventy five	девятьсот семьдесят пять
976	nine hundred and seventy six	девятьсот семьдесят шесть
977	nine hundred and seventy seven	девятьсот семьдесят семь
978	nine hundred and seventy eight	девятьсот семьдесят восемь
979	nine hundred and seventy nine	девятьсот семьдесят девять
980	nine hundred and eighty	девятьсот восемьдесят
981	nine hundred and eighty  one	девятьсот восемьдесят один
982	nine hundred and eighty  two	девятьсот восемьдесят два
983	nine hundred and eighty  three	девятьсот восемьдесят три
984	nine hundred and eighty  four	девятьсот восемьдесят четыре
985	nine hundred and eighty  five	девятьсот восемьдесят пять
986	nine hundred and eighty  six	девятьсот восемьдесят шесть
987	nine hundred and eighty  seven	девятьсот восемьдесят семь
988	nine hundred and eighty  eight	девятьсот восемьдесят восемь
989	nine hundred and eighty  nine	девятьсот восемьдесят девять
990	nine hundred and ninety	девятьсот девяносто
991	nine hundred and ninety one	девятьсот девяносто один
992	nine hundred and ninety two	девятьсот девяносто два
993	nine hundred and ninety three	девятьсот девяносто три
994	nine hundred and ninety four	девятьсот девяносто четыре
995	nine hundred and ninety five	девятьсот девяносто пять
996	nine hundred and ninety six	девятьсот девяносто шесть
997	nine hundred and ninety seven	девятьсот девяносто семь
998	nine hundred and ninety eight	девятьсот девяносто восемь
999	nine hundred and ninety nine	девятьсот девяносто девять
1000	one thousand	одна тысяча */
