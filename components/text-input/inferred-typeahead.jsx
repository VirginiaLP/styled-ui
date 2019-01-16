import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BootstrapContainer, forwardClassRef } from '../utils';
import { InferredBase } from '../text-input-v2/inferred-base';
import { Typeahead } from './typeahead';

const StyledTypeahead = styled(
	React.forwardRef((props, ref) => <Typeahead {...props} ref={ref} />),
)`
	&& .rbt-input,
	&& .rbt-input:focus {
		line-height: 1;
		padding: 8px;
		${props =>
			props.inferred
				? `
		color: #006099;
		padding-right: 44px;`
				: ''};
	}
`;

export const InferredTypeahead = forwardClassRef(
	class InferredTypeahead extends Component {
		static propTypes = {
			/** Decimal percent value for the confidence value. E.g. 0.75 */
			confidence: PropTypes.number,
			/** String to display in the confidence tooltip. Defaults to Heuristic algorithm */
			confidenceSource: PropTypes.string,
			/** Function called when the input value is changed */
			onChange: PropTypes.func,
			/** Function called when the OK button is clicked or an input value is confirmed */
			onConfirm: PropTypes.func.isRequired,
			/** See the docs for how to override styles properly  */
			className: PropTypes.string,
		};

		static defaultProps = {
			confidenceSource: 'Heuristic Algorithm',
		};

		render() {
			const {
				confidence,
				confidenceSource,
				className,
				onConfirm,
				onChange,
				forwardedRef,
				...inputProps
			} = this.props;

			return (
				<BootstrapContainer>
					<InferredBase
						className={className}
						confidence={confidence}
						confidenceSource={confidenceSource}
						onConfirm={onConfirm}
					>
						{props => (
							<StyledTypeahead
								inferred={props.inferred}
								onInputChange={onChange}
								onChange={onChange}
								ref={forwardedRef}
								{...inputProps}
							/>
						)}
					</InferredBase>
				</BootstrapContainer>
			);
		}
	},
);
