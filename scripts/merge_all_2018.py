import re

# 1. Update chemistry.ts
with open('src/data/questions/chemistry.ts', 'r') as f:
    chem_content = f.read()

if 'CHEMISTRY_2018_QUESTIONS' not in chem_content:
    chem_content = re.sub(
        r'export const CHEMISTRY_QUESTIONS: Question\[\] = \[',
        'import { CHEMISTRY_2018_QUESTIONS } from "./chemistry2018";\n\nexport const CHEMISTRY_2017_QUESTIONS: Question[] = [',
        chem_content
    )
    chem_content += '\nexport const CHEMISTRY_QUESTIONS: Question[] = [\n  ...CHEMISTRY_2017_QUESTIONS,\n  ...CHEMISTRY_2018_QUESTIONS,\n];\n'
    with open('src/data/questions/chemistry.ts', 'w') as f:
        f.write(chem_content)
    print("Updated chemistry.ts")

# 2. Update physics.ts
with open('src/data/questions/physics.ts', 'r') as f:
    phys_content = f.read()

if 'PHYSICS_2018_QUESTIONS' not in phys_content:
    phys_content = re.sub(
        r'export const PHYSICS_QUESTIONS: Question\[\] = \[',
        'import { PHYSICS_2018_QUESTIONS } from "./physics2018";\n\nexport const PHYSICS_2017_QUESTIONS: Question[] = [',
        phys_content
    )
    phys_content += '\nexport const PHYSICS_QUESTIONS: Question[] = [\n  ...PHYSICS_2017_QUESTIONS,\n  ...PHYSICS_2018_QUESTIONS,\n];\n'
    with open('src/data/questions/physics.ts', 'w') as f:
        f.write(phys_content)
    print("Updated physics.ts")

# 3. Update mathsNat.ts
with open('src/data/questions/mathsNat.ts', 'r') as f:
    math_content = f.read()

if 'MATHS_2018_QUESTIONS' not in math_content:
    math_content = re.sub(
        r'export const MATHS_NAT_QUESTIONS: Question\[\] = \[',
        'import { MATHS_2018_QUESTIONS } from "./maths2018";\n\nexport const MATHS_NAT_2017_QUESTIONS: Question[] = [',
        math_content
    )
    math_content += '\nexport const MATHS_NAT_QUESTIONS: Question[] = [\n  ...MATHS_NAT_2017_QUESTIONS,\n  ...MATHS_2018_QUESTIONS,\n];\n'
    with open('src/data/questions/mathsNat.ts', 'w') as f:
        f.write(math_content)
    print("Updated mathsNat.ts")

# 4. Update english.ts
with open('src/data/questions/english.ts', 'r') as f:
    eng_content = f.read()

if 'ENGLISH_2018_QUESTIONS' not in eng_content:
    eng_content = re.sub(
        r'export const ENGLISH_QUESTIONS: Question\[\] = \[',
        'import { ENGLISH_2018_QUESTIONS } from "./english2018";\n\nexport const ENGLISH_2017_QUESTIONS: Question[] = [',
        eng_content
    )
    eng_content += '\nexport const ENGLISH_QUESTIONS: Question[] = [\n  ...ENGLISH_2017_QUESTIONS,\n  ...ENGLISH_2018_QUESTIONS,\n];\n'
    with open('src/data/questions/english.ts', 'w') as f:
        f.write(eng_content)
    print("Updated english.ts")

# 5. Update aptitude.ts
with open('src/data/questions/aptitude.ts', 'r') as f:
    apt_content = f.read()

if 'APTITUDE_2018_QUESTIONS' not in apt_content:
    apt_content = re.sub(
        r'export const APTITUDE_QUESTIONS: Question\[\] = \[',
        'import { APTITUDE_2018_QUESTIONS } from "./aptitude2018";\n\nexport const APTITUDE_2017_QUESTIONS: Question[] = [',
        apt_content
    )
    apt_content += '\nexport const APTITUDE_QUESTIONS: Question[] = [\n  ...APTITUDE_2017_QUESTIONS,\n  ...APTITUDE_2018_QUESTIONS,\n];\n'
    with open('src/data/questions/aptitude.ts', 'w') as f:
        f.write(apt_content)
    print("Updated aptitude.ts")

print("All subject files merged successfully!")
