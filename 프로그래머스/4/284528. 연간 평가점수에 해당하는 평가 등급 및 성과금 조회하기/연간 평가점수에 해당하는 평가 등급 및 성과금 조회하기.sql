-- 코드를 작성해주세요
SELECT E.EMP_NO, EMP_NAME, GRADE, 
        CASE
        WHEN GRADE ='S' THEN SAL * 0.2
        WHEN GRADE = 'A' THEN SAL * 0.15
        WHEN GRADE = 'B' THEN SAL * 0.1
        ELSE SAL * 0
        END AS BONUS
FROM (SELECT EMP_NO,
            CASE 
                WHEN AVG(SCORE) >= 96 THEN 'S'
                WHEN AVG(SCORE) >= 90 THEN 'A'
                WHEN AVG(SCORE) >= 80 THEN 'B'
                ELSE 'C'
            END AS GRADE
     FROM HR_GRADE
     GROUP BY EMP_NO)AS G, HR_EMPLOYEES E
WHERE G.EMP_NO = E.EMP_NO 
ORDER BY EMP_NO